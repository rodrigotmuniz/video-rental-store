const { getInvalidTypes, allTypes } = require("../../../frameworks/utils/getInvalidTypes")
const { getTypeAdapter } = require("../../../frameworks/utils/getTypeAdapter")

describe('getInvalidTypes = (...validTypesNames)', () => {
  test('should return all types if validTypesNames is empty', () => {
    const validTypesNames = []

    const expected = allTypes
    const received = getInvalidTypes(validTypesNames)

    expect(received).toEqual(expected)
  })
  test('should return all types except validTypes inserted into validTypeNames', () => {
    const validTypesNamesList = ['array', 'bigint', 'boolean', 'function', 'null', 'number', 'object', 'regexp', 'map', 'set', 'date', 'string', 'symbol', 'undefined']

    validTypesNamesList.forEach(validName1 => {
      validTypesNamesList.forEach(validName2 => {
        let expected = []

        allTypes.forEach(type => {
          if (getTypeAdapter(type) !== validName1 && getTypeAdapter(type) !== validName2) {
            expected.push(type)
          }
        })
        
        const received = getInvalidTypes(validName1, validName2)

        expect(received).toEqual(expected)
      })
    })

  })
})

