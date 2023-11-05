const { getTypeAdapter } = require("./getTypeAdapter")


exports.allTypes = [
  'string',
  1,
  0,
  1n,
  () => { },
  {},
  [],
  null,
  undefined,
  true,
  false,
  /a/,
  new Map(),
  new Set(),
  Symbol(),
  new Date(),
]

exports.getInvalidTypes = (...validTypesName) => {
  return this.allTypes.filter(type => {
    const typeName = getTypeAdapter(type)
    return !validTypesName.includes(typeName)
  })
}
