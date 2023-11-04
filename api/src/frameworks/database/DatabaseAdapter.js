const  MongoDbConnection  = require("./mongodb/MongoDbConnection");

class DatabaseAdapter {
  constructor() {
    this.database = new MongoDbConnection()
  }

  get db() {
    return this.database.db
  }

  async init() {
    await this.database.init()
  }
}

module.exports = DatabaseAdapter