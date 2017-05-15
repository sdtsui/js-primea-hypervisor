const Graph = require('ipld-graph-builder')
const multibase = require('multibase')
const Kernel = require('./kernel.js')

module.exports = class Hypervisor {
  constructor (opts) {
    this.graph = new Graph(opts.dag)
    this._vmInstances = new Map()
    this._VMs = {}
  }

  async getInstance (port, createIfNotFound, parentPort) {
    const id = await this.generateID(port)
    let kernel = this._vmInstances.get(id)
    if (!kernel && createIfNotFound) {
      // load the the ID from the merkle store
      await this.graph.tree(port.id, 1)

      kernel = await this.createInstance(port.type, port.link, port, parentPort)
      kernel.on('idle', () => {
        this._vmInstances.delete(id)
      })
    }
    return kernel
  }

  // given a port, wait untill its source contract has reached the threshold
  // tick count
  async wait (port, threshold, fromPort) {
    let kernel = await this.getInstance(port, false)
    if (kernel) {
      return kernel.wait(threshold, fromPort)
    } else {
      return threshold
    }
  }

  async createInstance (type, state, entryPort = null, parentPort) {
    const VM = this._VMs[type]

    if (!state) {
      state = {
        '/': VM.createState()
      }
    }

    // create a new kernel instance
    const kernel = new Kernel({
      entryPort: entryPort,
      parentPort: parentPort,
      hypervisor: this,
      state: state,
      VM: VM
    })

    const id = await this.generateID(entryPort)
    // save the newly created instance
    this._vmInstances.set(id, kernel)
    await kernel.start()
    return kernel
  }

  async createStateRoot (container, ticks) {
    await container.wait(ticks)
    return this.graph.flush(container.state)
  }

  async generateID (port) {
    if (!port || !port.id) {
      return null
    }

    let id = Object.assign({}, port.id)
    id = await this.graph.flush(id)
    id = id['/']
    if (Buffer.isBuffer(id)) {
      id = multibase.encode('base58btc', id).toString()
    }
    return id
  }

  registerContainer (type, vm) {
    this._VMs[type] = vm
  }
}
