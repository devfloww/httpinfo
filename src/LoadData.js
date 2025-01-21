// function that finds the file for the queried code and returns the read data as a js object

import fs from "fs"
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// loads data for short format
export const LoadDataShort = ( code ) => {
  const code_number = String(code)
    // 
    try {
        const data = fs.readFileSync( __dirname + `/assets/local_cache_short/${code_number}-data-short.json`, "utf8" )
        const json = JSON.parse( data )
      // return the the data
      return json
      
    } catch (error) {
      //return a json error
      return {
        code,
        error: "File missing",
        message: "Status code in UNASSIGNED"
      }
    }
}

// loads data for long format
export const LoadDataLong = ( code ) => {
  const code_number = String(code)
    // 
    try {
        const data = fs.readFileSync(__dirname + `/assets/local_cache_long/${code_number}-data-long.json`, "utf8" )
        const json = JSON.parse( data )
      // return the the data
      return json
      
    } catch (error) {
      //return a json error
      return {
        code,
        error: "File missing",
        message: "Status code in UNASSIGNED"
      }
    }
}
