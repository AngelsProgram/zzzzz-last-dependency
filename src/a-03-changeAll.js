const { options } = require("./a-01-options");

/**
 * @description Change all values from a object to a specific value
 * @param {boolean} value
 */
function changeAll(value) {
  for (const key in options) {
    options[key]['enable'] = value;
  }
}

/**
 * Handle Args - modifying the enable property based on args
 * @param {string[]} args
 */
function handleArgs(args) {
  if (args.includes("-A")) changeAll(true);
  if (args.includes("-N")) changeAll(false);
  const flags = options.map(value => value.flag);
  const filtered = args.filter((value) => flags.includes(value) || flags.includes(`--no${value}`))
  const set = Array.from(new Set(filtered));
  options.forEach((option) => {
    if (set.includes(option.flag)) option.enable = true;
    if (set.includes(`--no${option.flag}`)) option.enable = false;
  });
}

module.exports = { handleArgs }
