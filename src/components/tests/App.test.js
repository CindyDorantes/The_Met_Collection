import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import App from '../../App';

describe('Top level App rendering test', () => {
  test('match snapshot for App', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
