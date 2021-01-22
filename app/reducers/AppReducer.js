const {
  SET_CONTACT_LIST,
  SET_FAVORITE_CONTACTS,
} = require('../actions/action-types');

const initialState = {
  contactList: [],
  favorites: [],
};

const AppReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_CONTACT_LIST:
      newState = {...state, contactList: action.payload};
      return newState;

    case SET_FAVORITE_CONTACTS:
      newState = {...state, favorites: action.payload};
  }
};

export default AppReducer;
