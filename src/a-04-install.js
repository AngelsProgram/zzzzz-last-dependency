const child_process = require("node:child_process");

function callback(error, stdout, stderr) {
  if (error) { console.error(`error: ${error?.message}`); return; }
  if (stderr) { console.warn(`stderr: ${stderr}`); return; }
  console.log(`stdout: ${stdout}`);
}

/**
 * @param {string} _package
 */
function install(_package, _flag) {
  const package = _package.toLowerCase();
  const command = `npm i zzzzz-last-${package}@github:AngelsProgram/zzzzz-last-dependency#install ${_flag}`;
  child_process.execSync(command);
}

module.exports = { install }
