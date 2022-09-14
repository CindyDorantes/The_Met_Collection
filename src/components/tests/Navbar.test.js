import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import Navbar from '../Navbar';

describe('Navbar rendering test', () => {
  test('match snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
