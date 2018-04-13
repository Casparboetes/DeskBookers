import request from 'superagent'

export default class ApiClient {
  constructor(host) {
    this.host = 'https://www.deskbookers.com/nl-nl/explore/ajax.json?q='
  }

  get(location) {
  return request
    .get(this.createUrl(location))
    .set(this.headers())
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }

    return headers
  }

  createUrl(path) {
    return [this.host, path].join('')
  }
}
//
//
// // no error checking
// (yourFunctionName || Function)();
//
// // debugging, maybe on Firefox
// (yourFunctionName || console.error)();
//
// // debugging on Chrome
// (yourFunctionName || function(){ console.error(arguments) })();
