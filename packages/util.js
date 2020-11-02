const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

const hasOwnProperty = Object.prototype.hasOwnProperty
exports.hasOwn = function hasOwn(target, key) {
  return hasOwnProperty.call(target, key)
}

exports.log = console.log

exports.error = function(title, hint) {
  exports.log(`${chalk.bgRed.black(`${title}`)}: ${hint}`)
}