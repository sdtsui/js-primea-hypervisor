<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [constructor](#constructor)
-   [store](#store)
-   [get](#get)
-   [delete](#delete)

## constructor

[capsManager.js:7-10](https://github.com/primea/js-primea-hypervisor/blob/1623d0570d9d2c2c1859ca73c05054596cccf553/capsManager.js#L7-L10 "Source code on GitHub")

The caps manager manages perstantly stores the capabilities
fetching and waiting on ports

**Parameters**

-   `caps` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## store

[capsManager.js:17-19](https://github.com/primea/js-primea-hypervisor/blob/1623d0570d9d2c2c1859ca73c05054596cccf553/capsManager.js#L17-L19 "Source code on GitHub")

Stores a capability persistantly

**Parameters**

-   `key` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `cap` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## get

[capsManager.js:26-29](https://github.com/primea/js-primea-hypervisor/blob/1623d0570d9d2c2c1859ca73c05054596cccf553/capsManager.js#L26-L29 "Source code on GitHub")

gets a cap given it's key

**Parameters**

-   `key` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## delete

[capsManager.js:35-37](https://github.com/primea/js-primea-hypervisor/blob/1623d0570d9d2c2c1859ca73c05054596cccf553/capsManager.js#L35-L37 "Source code on GitHub")

delete an cap given its key

**Parameters**

-   `key` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 