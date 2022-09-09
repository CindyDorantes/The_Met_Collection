import depsArtwork from './depsArtwork';

const GET_ARTWORK = 'get_artwork';
const objectURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

const artworkReducer = (state = [], action) => {
  const artworkData = action.payload;
  switch (action.type) {
    case GET_ARTWORK:
      console.log('inside reducer ', artworkData);
      return [...artworkData];
    default:
      return state;
  }
};

const getArtwork = (id) => (dispatch) => {
  const artworkItems = [];
  depsArtwork[id].map((object) => {
    fetch(`${objectURL}${object}`)
      .then(async (response) => {
        const artwork = await response.json();
        return artwork;
      })
      .then((artwork) => {
        artworkItems.push(artwork);
        dispatch({ type: GET_ARTWORK, payload: artworkItems });
        return artworkItems;
      });
    // dispatch({ type: GET_ARTWORK, payload: artworkItems });
    return artworkItems;
  });
  // console.log('***', artworkItems);
  // dispatch({ type: GET_ARTWORK, payload: artworkItems });
};

export { getArtwork };
export default artworkReducer;
