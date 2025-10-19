import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from '@reduxjs/toolkit';
import { profileReducer } from './profileReducer';
import { thunk } from 'redux-thunk';
import { appActions, appReducer } from './appReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  profile: profileReducer,
  app: appReducer,
});

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

if (localStorage.getItem('favorites')) {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  store.dispatch(appActions.setFavorites(favorites));
}

if (localStorage.getItem('theme')) {
  const theme = JSON.parse(localStorage.getItem('theme')) || 'light';
  store.dispatch(appActions.setTheme(theme));
  document.body.dataset.theme = theme;
}

store.subscribe(() => {
  const favorites = JSON.stringify(store.getState().app.favorites);
  const theme = JSON.stringify(store.getState().app.theme);
  localStorage.setItem('favorites', favorites);
  localStorage.setItem('theme', theme);
});
