const { getType } = require('jest-get-type');

class ExpressRouteAdapter {
  static createFnAdapter(controller, fnName) {
    const { validateInputs, transformInput, execFn, returnResponse } = ExpressRouteAdapter
    validateInputs(controller, fnName)
    return async (req, res) => {
      const input = transformInput(req)
      const response = await execFn(fnName, controller, input)
      returnResponse(response, res)
    }
  }

  static validateInputs(controller, fnName) {
    if (getType(controller) !== 'object' || getType(fnName) !== 'string') {
      throw new Error('Invalid input')
    }
  }

  static transformInput(req) {
    const input = {
      body: req.body,
      headers: req.headers,
      params: req.params,
      query: req.query
    }
    return input
  }

  static async execFn(fnName, controller, input) {
    const func = controller[fnName].bind(controller)
    const response = await func(input)
    return response
  }

  static returnResponse = (response, res) => {
    const { statusCode, body } = response
    res.status(statusCode).json(body)
  }

}

module.exports = ExpressRouteAdapter