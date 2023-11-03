import utils from '../utils.js';

test('if utils mocked automatically', () => {
  // Public methods of `utils` are now mock functions
  utils.authorize.mockReturnValue('mocked_token');
  console.log(utils.authorize())
  expect(utils.authorize.mock).toBeTruthy();
  expect(utils.isAuthorized.mock).toBeTruthy();

  // You can provide them with your own implementation
  // or pass the expected return value
  utils.isAuthorized.mockReturnValue(true);

  expect(utils.authorize()).toBe('mocked_token');
  expect(utils.isAuthorized('not_wizard')).toBeTruthy();
});