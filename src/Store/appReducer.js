const APP_TYPES = {
  setFavorites: 'setFavorites',
  setProfiles: 'setProfiles',
  resetAppState: 'resetAppState',
  addToFavorites: 'addToFavorites',
  removeFromFavorites: 'removeFromFavorites',
};

export const appActions = {
  setFavorites: (payload) => ({ type: APP_TYPES.setFavorites, payload }),
  setProfiles: (payload) => ({ type: APP_TYPES.setProfiles, payload }),
  resetAppState: (payload) => ({ type: APP_TYPES.resetAppState, payload }),
  addToFavorites: (payload) => ({ type: APP_TYPES.addToFavorites, payload }),
  removeFromFavorites: (payload) => ({ type: APP_TYPES.removeFromFavorites, payload }),
};

const initialState = {
  favorites: [],
  profiles: null,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_TYPES.setFavorites:
      return {
        ...state,
        favorites: payload,
      };
    case APP_TYPES.setProfiles:
      return {
        ...state,
        profiles: payload,
      };
    case APP_TYPES.addToFavorites:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case APP_TYPES.removeFromFavorites:
      return {
        ...state,
        favorites: state.favorites.filter((id) => payload !== id),
      };
    case APP_TYPES.resetAppState:
      return initialState;
    default:
      return state;
  }
};

// Асинхронные действия
export const getProfiles = () => async (dispatch) => {
  const profiles = await fetch(`http://localhost:3000/profiles`).then((response) =>
    response.json()
  );
  dispatch({ type: APP_TYPES.setProfiles, payload: profiles });
  return profiles;
};

export const getFavorites = () => async (dispatch, getState) => {
  const favoritesProfiles = [];
  const profiles = await fetch(`http://localhost:3000/profiles`).then((response) =>
    response.json()
  );

  const favorites = getState().app.favorites;
  profiles.forEach((profile) => {
    if (favorites.includes(profile.id)) favoritesProfiles.push(profile);
  });
  dispatch(appActions.setProfiles(favoritesProfiles));
  return favoritesProfiles;
};
