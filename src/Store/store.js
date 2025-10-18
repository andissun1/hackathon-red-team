import { applyMiddleware, combineReducers, legacy_createStore } from '@reduxjs/toolkit';
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

if (localStorage.getItem('favorites') && !store.getState().favorites) {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  store.dispatch(appActions.setFavorites(favorites));
}

store.subscribe(() => {
  const favorites = JSON.stringify(store.getState().app.favorites);
  localStorage.setItem('favorites', favorites);
});
