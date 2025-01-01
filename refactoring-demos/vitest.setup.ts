import '@testing-library/jest-dom';

import { setupServer } from 'msw/node'
import { handlers } from './src/mocks/handlers';

const server = setupServer(...handlers)

beforeAll(() => {
  // Start the interception.
  server.listen()
})

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers()
})

afterAll(() => {
  // Disable request interception and clean up.
  server.close()
})