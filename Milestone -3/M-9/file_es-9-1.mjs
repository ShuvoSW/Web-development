// common js to esm

import { a }  from "./file_es-9-2.mjs"
import { a as x }  from "./file_es-9-3.mjs"
import utils from "./utils_esm/index.mjs";

console.log(utils.add(2, 3));
console.log(utils.biyog(x, a));
console.log(a, x);
