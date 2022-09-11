import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import DepartmentItem from '../DepartmentItem';

describe('Department test', () => {
  test('snapshot for department', () => {
    const artwork = [{
      objectID: 300,
      primaryImageSmall: 'https://images.metmuseum.org/CRDImages/ad/web-large/69178.jpg',
      title: 'Balcony',
      artistDisplayName: '',
    }];

    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/the-american-wing" element={<DepartmentItem props={artwork} />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
