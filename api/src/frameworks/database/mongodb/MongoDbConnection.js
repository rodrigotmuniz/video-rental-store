import { MongoClient } from "mongodb";

export class MongoDbConnection {


  DB_URL = 'mongodb://localhost:27017';
  DB_NAME = 'seu_banco_de_dados';

  constructor() {
    if (!MongoDbConnection._instance) {
      MongoDbConnection._instance = this
    }
    return MongoDbConnection._instance
  }

  static get db() {
    return this._db
  }

  async init() {
    // if (this._db) return this._db

    try {
      const client = new MongoClient(this.DB_URL);
      await client.connect();
      MongoDbConnection._db = client.db(this.DB_NAME);
      console.log('Conexão com o MongoDB estabelecida');
    } catch (error) {
      throw new Error('Erro ao conectar com o MongoDB: ' + error.message)
    }
  }

}