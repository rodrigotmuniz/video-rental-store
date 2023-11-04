const Singleton = require('./Singleton')

const s1 = new Singleton()
s1.a = 'ble'
console.log('s1', s1)
const s2 = new Singleton()
console.log('s2', s2)