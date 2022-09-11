import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';
import store from '../../redux/configureStore';

const data = [
  {
    departmentId: 1,
    displayName: 'American Decorative Arts',
  },
];

const handlers = [
  rest.get('https://collectionapi.metmuseum.org/public/collection/v1/departments', (req, res, ctx) => res(ctx.json({ data }))),
];
const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives coins after dispatching', async () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
  );

  expect(await screen.findByText(/American Decorative Arts/i)).toBeInTheDocument();
});
