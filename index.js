'use strict'

const path = require('path')

const { vendorVersion } = require('./package.json')
const { spawn } = require('child_process')
const argDict = require('./args.json')


const svgCleanerPath =
  process.platform === 'darwin'
    ? path.join(__dirname, 'vendor', `svgcleaner-macos-${vendorVersion}`) :
  process.platform === 'linux' && process.arch === 'x64'
    ? path.join(__dirname, 'vendor', `svgcleaner-linux-x86_64-${vendorVersion}`) :
  process.platform === 'win32' && process.arch === 'x64'
    ? path.join(__dirname, 'vendor', `svgcleaner-win64-${vendorVersion}`) :
  null


function convertArg(nodeArgKey, nodeArgValue) {
    if (argDict[nodeArgKey] === undefined) {
        console.warn(`Unrecognized option '${nodeArgKey}' passed.`)
    }
    const cliArgKey = argDict[nodeArgKey]
    if (nodeArgValue === true) {
        return `${cliArgKey}=true`
    }
    return `${cliArgKey}=${nodeArgValue}`
}

function convertArgs(argObject) {
    const ret = []
    for (const objKey in argObject) {
        if (objKey === 'source' || objKey === 'target') {
            ret.push(argObject[objKey])
            continue
        }
        ret.push(convertArg(objKey, argObject[objKey]))
    }
    return ret
}

module.exports = function svgCleaner(cliArgs, wrapperArgs = {}) {
    if (wrapperArgs.dev || wrapperArgs.showCliArgs) {
        console.log(convertArgs(cliArgs))
    }
    if (!('quiet' in cliArgs)) {
        cliArgs.quiet = true
    }
    if (wrapperArgs.outdir) {
        require('mkdirp')(wrapperArgs.outdir, function (err) {
            if (err) {
                console.error(err)
            }
        })
    }
    const svgcleanerProc = spawn(svgCleanerPath, convertArgs(cliArgs))

    if (wrapperArgs.dev || wrapperArgs.showCliOutput) {
        svgcleanerProc.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`)
        })

        svgcleanerProc.stderr.on('data', (data) => {
            console.warn(`ERR: ${data}`)
        })
    }
  
    if (wrapperArgs.callback) {
        svgcleanerProc.stderr.on('close', (code) => {
            wrapperArgs.callback(code)
        })
    }
}
