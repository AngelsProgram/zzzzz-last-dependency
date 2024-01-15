#!/usr/bin/env node

const { options } = require('./src/a-01-options');
const { helper } = require('./src/a-02-helper');
const { handleArgs } = require('./src/a-03-changeAll');
const { install } = require('./src/a-04-install')

function main() {
  /** @type {string[]} */
  const args = process.argv.slice(2);
  const subcommand = args[0];
  if (subcommand == "help") {
    helper();
    return;
  }
  // const debug = args.includes("--debug");
  handleArgs(args);
  // if (debug) {
  //   const selected = options.filter(option => option.enable).map(option => option.install).join(',');
  //   console.log(`Installing: ${selected}`);
  // }
  options.forEach((option) => {
    if (option.enable) {
      install(option.install, option.mode);
    }
  });
}

if (require.main === module) {
  main();
}
