// const MovieController = require('../../../interfaces/http/controllers/MovieController')
const ExpressRouteAdapter = require('./ExpressRouteAdapter')

// jest.mock('../../../interfaces/http/controllers/MovieController')

class MockController {
  async fn() {
    return {
      statusCode: 200,
      body: 'mocked class'
    }
  }
}

const req = {
  body: { value: 'key' },
  params: { value: 'key' },
  query: { value: 'key' },
  url: 'some.url',
  path: '/path',
  headers: { value: 'key' }
}

const res = {
  status: () => res,
  json: () => res
}

const getAllTypesExceptChoosenOnes = (...exceptedTypesName) => {
  const types = ['string', 1, 0, () => {}, {}, [], null, undefined, 0, true, false]
  return types.filter(type => getType)
}




describe('validateInputs(controller, fnName)', () => {
  test('should thrown an error if any input params are invalid', () => {
    const { validateInputs } = ExpressRouteAdapter

    const invalidController = [1, null, undefined, () => { }, [], 'string']
    const invalidFnName = [1, null, undefined, () => { }, [], {}]

    const validController = {}
    const validFnName = 'string'

    invalidController.forEach(controller => {
      expect(() => validateInputs(controller, validFnName)).toThrow('Invalid input')
    })

    invalidFnName.forEach(fnName => {
      expect(() => validateInputs(validController, fnName)).toThrow('Invalid input')
    })
  })

  describe('static transformInput(req)', () => {
    test('should return an error if "req" is invalid', () => {

    })
    test('should return a success object if "req" is valid', () => {
      const exptected = {
        body: { value: 'key' },
        params: { value: 'key' },
        query: { value: 'key' },
        headers: { value: 'key' }
      }
      const received = ExpressRouteAdapter.transformInput(req)
      expect(received).toEqual(exptected)
    })
  })

  describe('static async execFn(fnName, controller, input)', () => {
    test('', () => { })
  })

  describe('static returnResponse = (response, res)', () => {
    test('', () => { })
  })

  // const { fn: createExpressRoute } = ExpressRouteAdapter

  // const mockController = new MockController()F
  // const { fn } = mockController

  // const route = await createExpressRoute(mockController, fn.name)
  // await route(req, res)
})