'use strict'
const fs        = require('fs')

class Obj {

    constructor () {

        this.logCyan        = '\x1b[36m%s\x1b[0m '
        this.logYellow      = '\x1b[33m%s\x1b[0m '
    }

    // Inicia l'objecte
    init () {
        // TODO
    }

    // Agafa les dades que arriben d'una crida POST i retorna un objecte JSON
    promiseGetPostData (request) {
        return new Promise(async (resolve, reject) => {
            let body = '',
                error = null

            request.on('data', (data) => { body = body + data.toString() })
            request.on('close', () => { /* TODO - Client closed connection, destroy everything! */ })
            request.on('error', (err) => { error = 'Error getting data' })
            request.on('end', async () => {
                let rst = null
                if (error !== null) {
                    console.log('Error getting data from post: ', error)
                    return reject(error)
                } else {
                    try {
                        return resolve(JSON.parse(body))
                    } catch (e) {
                        console.log('Error parsing data from post: ', error)
                        return reject(e)
                    }
                    
                }
            })
        })
    }

    // Força una espera al executar codi
    promiseWait (time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve() }, time)
        })
    }

    // Impedeix que s'enviin caràcters SQL a les dades rebudes
    preventInjection (data) {
        if (typeof data === 'string') {
            return data.replace('/[.,;\s]/g', '') // TODO: Aquesta funció cal millorar-la
        } else {
            return ''
        }
    }

    // Guarda un arxiu
    guardaArxiu (path, dades, tipus) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, dades, tipus, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}

// Export
module.exports = Obj

