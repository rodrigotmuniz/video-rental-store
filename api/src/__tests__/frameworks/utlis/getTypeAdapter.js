const { getTypeAdapter } = require("../../../frameworks/utils/getTypeAdapter")

// ESSA CLASSE NÃO PRECISARIA SER TESTADA POIS ELA É UM ADAPTER DIRETO 
// DE UMA BIBLIOTECA (NO QUAL ESPERA-SE QUE FORA TESTADA)

describe('getTypeAdapter = (value)', () => {
  test('should return array when "value" is array', () => {
    const value = []
    const expected = 'array'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return bigint when value is bigint', () => {
    const value = 10n
    const expected = 'bigint'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return boolean when value is boolean', () => {
    const values = [true, false]
    const expected = 'boolean'
    values.forEach(value => {
      const received = getTypeAdapter(value)
      expect(received).toEqual(expected)
    })
  })
  test('should return function when value is function', () => {
    const value = () => {}
    const expected = 'function'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return null when value is null', () => {
    const value = null
    const expected = 'null'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return number when value is number', () => {
    const value = 9007199254740991
    const expected = 'number'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return object when value is object', () => {
    const value = {}
    const expected = 'object'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return regexp when value is regexp', () => {
    const value = /a/
    const expected = 'regexp'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return map when value is map', () => {
    const value = new Map()
    const expected = 'map'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return set when value is set', () => {
    const value = new Set()
    const expected = 'set'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return date when value is date', () => {
    const value = new Date()
    const expected = 'date'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return string when value is string', () => {
    const value = 'string'
    const expected = 'string'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return symbol when value is symbol', () => {
    const value = Symbol()
    const expected = 'symbol'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
  test('should return undefined when value is undefined', () => {
    const value = undefined
    const expected = 'undefined'
    const received = getTypeAdapter(value)
    expect(received).toEqual(expected)
  })
})