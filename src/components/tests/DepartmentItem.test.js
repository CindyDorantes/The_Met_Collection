import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from '../../redux/configureStore';
import DepartmentItem from '../DepartmentItem';

describe('Coins test', () => {
  test('snapshot for coins', () => {
    const history = createBrowserHistory();
    const artwork = {
      objectID: 300,
      primaryImageSmall: 'https://images.metmuseum.org/CRDImages/ad/web-large/69178.jpg',
      title: 'Balcony',
      artistDisplayName: '',
    };

    history.push('/the-american-wing', { artwork });
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <Routes>
              <Route path="/coindetail" element={<DepartmentItem />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
