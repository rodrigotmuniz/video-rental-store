class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this
    }
    return Singleton.instance
  }
  // constructor() {
  //   if (!Singleton.instance) {
  //     // Se não houver uma instância, crie uma
  //     this.a = 2
  //     this.data = Math.random(); // Exemplo de dado aleatório
  //     Singleton.instance = this;
  //   }

  //   return Singleton.instance; // Retorna a instância existente
  // }

  // Método para obter os dados da instância
  // getData() {
  //   return this.data;
  // }
}

const s3 = new Singleton()
s3.a = 'bla'
console.log('s3', s3)
module.exports = Singleton

