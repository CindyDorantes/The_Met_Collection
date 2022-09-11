import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from '../../redux/configureStore';
import ArtworkContainer from '../ArtworkContainer';

describe('Artwork test', () => {
  test('snapshot for artwork', () => {
    const history = createBrowserHistory();
    const artwork = [{
      objectID: 300,
      primaryImage: 'https://images.metmuseum.org/CRDImages/ad/original/69178.jpg',
      primaryImageSmall: 'https://images.metmuseum.org/CRDImages/ad/web-large/69178.jpg',
      department: 'The American Wing',
      title: 'Balcony',
      culture: 'American',
      artistDisplayName: '',
      artistDisplayBio: '',
      objectDate: '1800 to 1830',
      medium: 'Wrought iron',
      dimensions: '44 1/2 x 242 in. (113 x 614.7 cm)',
      classification: '',
      objectURL: 'https://www.metmuseum.org/art/collection/search/300',
    }];

    history.push('/300', { artwork });
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router history={history}>
            <Routes>
              <Route path="/300" element={<ArtworkContainer />} />
            </Routes>
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
