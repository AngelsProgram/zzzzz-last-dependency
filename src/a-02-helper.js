const { options } = require('./a-01-options')

function helper() {
  console.log("Default is install only `dependencies` and `devDependencies` options.");
  console.log("These options are checked on this order and always the negation takes precedence.");
  console.log("Options: --debug");
  console.log("Options: -A (--all),-N (--none)");
  options.forEach((option) => console.log(`Option: ${option.flag} (${option.install})`)); //Object.keys(options)
  console.log("Unknown flag are ignored.");
}

module.exports = { helper }
