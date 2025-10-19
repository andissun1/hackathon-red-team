const PROFILE_TYPES = {
  setProfile: 'setProfile',
  removeProfile: 'removeProfile',
};

export const profileActions = {
  setProfile: (payload) => ({ type: PROFILE_TYPES.setProfile, payload }),
  removeProfile: () => ({ type: PROFILE_TYPES.removeProfile }),
};

const initialState = {
  id: null,
  name: null,
  surname: null,
  age: null,
  imgURL: null,
  skills: null,
  social: null,
  about: null,
  bage: null,
  other: null,
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_TYPES.setProfile:
      return {
        ...state,
        ...payload,
      };
    case PROFILE_TYPES.removeProfile:
      return initialState;
    default:
      return state;
  }
};

// Асинхронные действия
export const getProfileByID = (id) => async (dispatch) => {
  const profile = await fetch(`http://localhost:3000/profiles/${id}`).then((response) =>
    response.json()
  );
  dispatch({ type: PROFILE_TYPES.setProfile, payload: profile });
  return profile;
};
