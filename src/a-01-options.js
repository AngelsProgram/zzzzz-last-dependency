/** @typedef {'dependencies'|'devDependencies'|'optionalDependencies'|'peerDependencies'} TInstall */

/** @typedef {'-S'|'-D'|'-O'|'-P'} TFlag*/
/** @typedef {'--save'|'--save-dev'|'--save-optional'|'--save-peer'} TMode */

/**
 * @typedef {object} TOptionInstall
 * @property {TInstall} install
 * @property {TFlag} flag
 * @property {TMode} mode
 * @property {boolean} enable
 */

/**
 *
 * @param {TInstall} _install
 * @param {TFlag} _flag
 * @param {TMode} _mode
 * @param {boolean} _enable
 * @returns {TOptionInstall}
 */
function createOptionInstall(_install, _flag, _mode, _enable) {
  return {
    install: _install,
    flag: _flag,
    mode: _mode,
    enable: _enable
  }
}
const options = [
  createOptionInstall("dependencies", "-S", "--save", true),
  createOptionInstall("devDependencies", "-D", "--save-dev", true),
  createOptionInstall("optionalDependencies", "-O", "--save-optional", false),
  createOptionInstall("peerDependencies", "-P", "--save-peer", false),
]

module.exports = { options }
