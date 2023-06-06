// ham na aik variable jise ham koi b name de sakte hai use aik file se import krwaya ha 


// kyu k ham na default export kya ha to ham   import krty waqt koi b name use kr sakty hain
// agr ham specific export krna chahta ha to hamay  jo variable export krna ha us k gird {} lagani ho gi 
// or import krty wat b uuse specific {not by default} variabe k sath bracket lagani ho gi

// In React, when using Node.js as the runtime environment, you may come across the file extension ".mjs" instead of the usual ".js" extension. This change is due to the use of ECMAScript modules (ES modules) in Node.js.

// ES modules are a standardized way of structuring and importing/exporting JavaScript code. They provide a more modular and efficient approach compared to the CommonJS modules (used in Node.js with ".js" files) which have a different syntax for importing and exporting code.

// Node.js added experimental support for ES modules with version 12 and made it stable with version 14. With the introduction of ES modules, Node.js uses the ".mjs" file extension to indicate that a particular file contains ECMAScript modules.

// So, if you're using React with Node.js and want to take advantage of the ES modules syntax, you can use the ".mjs" extension for your module files. However, it's important to note that this is optional, and you can still use the traditional ".js" extension for your files if you prefer or if your project is not using ES modules.

// It's worth mentioning that the file extension alone doesn't determine whether a file is using ES modules or CommonJS modules. The use of ES modules in Node.js also requires setting the `"type": "module"` field in your `package.json` file or using the `--experimental-modules` flag when running Node.js with a specific file.

import any , {b,c,d} from './module2.mjs'
console.log(any);
console.log(b)
console.log(c)
console.log(d)