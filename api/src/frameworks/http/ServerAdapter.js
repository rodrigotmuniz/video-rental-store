import { ExpressServer } from "./express/ExpressServer";


const routes = [
  {path: '/', method: 'get', fn: 'M'}
]

export class ServerAdapter {
  constructor() {
    this.server = new ExpressServer(routes, this.fnAdapter)
  }


  getApis() {

  }


  fnAdapter(fn) {
    console.log('blaaaa')
    // return async (res, res) => {




    // }
  }

}

