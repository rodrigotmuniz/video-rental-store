import { MongoDbConnection } from "./mongodb/MongoDbConnection";

export class DatabaseAdapter {
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