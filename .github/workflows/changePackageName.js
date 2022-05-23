const fs = require("fs");

let package = fs.readFileSync("./package.json", 'utf-8');
let packageJson = JSON.parse(package);
packageJson.name = "@ovx-js/ovx";
package = JSON.stringify(packageJson);
// console.log(package);
fs.writeFileSync("./package.json", package, 'utf-8');
