const ServerAdapter = require('./ServerAdapter');

jest.mock('./express/ExpressServer', () => jest.fn())


test.only('ServerAdapter', async () => {
  try {
    const server = new ServerAdapter()
    const fn = jest.fn((input) => {
      return { body: input.body, statusCode: 200 }
    })
    const route = await server.controllerFnAdapter(fn)

    const req = {
      body: 'body enviado pelo client',
      params: ''
    }

    const res = {
      status: () => res,
      json: () => res
    }



    await route(req,res)
  } catch (error) {
    console.log(error)
  }

})