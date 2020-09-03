const path = require("path");

console.log(__dirname); // current dir
console.log(__filename); // current file

// concatenate paths
console.log(path.join(__dirname, "folder", "nested-folder", "filename.ext"));

// current file's basename
console.log(path.basename(__filename));

// current directory
console.log(path.dirname(__filename));

// extension name
console.log(path.extname(__filename));

// parsing file's info
console.log(path.parse(__filename)); // name, dir, ext, base, root
