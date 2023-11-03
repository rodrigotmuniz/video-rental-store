import {jest} from '@jest/globals';
import { ServerAdapter } from './ServerAdapter';
const { ExpressServer } = await import('./express/ExpressServer');

jest.mock('./express/ExpressServer')


test('ServerAdapter', () => {
  try {
    const server = new ServerAdapter()
    server.fnAdapter(null, null)
  } catch (error) {
    console.log(error)
  }

})