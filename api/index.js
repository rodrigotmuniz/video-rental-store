import { DatabaseAdapter } from './src/frameworks/database/DatabaseAdapter.js'
import { ServerAdapter } from './src/frameworks/http/ServerAdapter.js'

const main = async () => {
  try {
    const db = new DatabaseAdapter()
    await db.init()
    
    const server = new ServerAdapter()
    server.init()
  } catch(e) {
    console.log(e.message)
  }

}

main()