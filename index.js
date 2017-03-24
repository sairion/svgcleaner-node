'use strict'

var path = require('path')

var Version = require('./package.json').vendorVersion
var spawn = require('child_process').spawn


var svgCleanerPath =
  process.platform === 'darwin'
    ? path.join(__dirname, 'vendor', `svgcleaner-osx-v${Version}`) :
  process.platform === 'linux' && process.arch === 'x64'
    ? path.join(__dirname, 'vendor', `svgcleaner-linux64-v${Version}`) :
  process.platform === 'win32' && process.arch === 'x64'
    ? path.join(__dirname, 'vendor', `svgcleaner-win64-v${Version}`) :
  null

function svgCleaner(cliArgs, wrapperArgs = {}) {
    if (wrapperArgs.dev || wrapperArgs.showCliArgs) {
        console.log(convertArgs(cliArgs))
    }
    if (wrapperArgs.outdir) {
        require('mkdirp')(wrapperArgs.outdir, function (err) {
            if (err) {
                console.error(err)
            }
        })
    }
    var svgcleanerProc = spawn(svgCleanerPath, convertArgs(cliArgs))

    if (wrapperArgs.dev || wrapperArgs.showCliOutput) {
        svgcleanerProc.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`)
        })

        svgcleanerProc.stderr.on('data', (data) => {
            console.warn(`ERR: ${data}`)
        })
    }
}

var argDict = require('./args.json')

function convertArg(nodeArgKey, nodeArgValue) {
    if (argDict[nodeArgKey] === undefined) {
        console.warn(`Unrecognized option '${nodeArgKey}' passed.`)
    }
    var cliArgKey = argDict[nodeArgKey]
    if (nodeArgValue === true) {
        return `${cliArgKey}=true`
    }
    return `${cliArgKey}=${nodeArgValue}`
}

function convertArgs(argObject) {
    var ret = []
    for (var objKey in argObject) {
        if (objKey === 'source' || objKey === 'target') {
            ret.push(argObject[objKey])
            continue
        }
        ret.push(convertArg(objKey, argObject[objKey]))
    }
    return ret
}

exports.svgCleaner = svgCleaner
