const {
  SET_CONTACT_LIST,
  SET_FAVORITE_CONTACTS,
  SET_ORIGINAL_CONTACTS,
  SET_SELECTED_CONTACTS,
} = require('../actions/action-types');

const initialState = {
  contactList: [],
  favorites: [],
  selectedContacts: [],
  originalList: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_LIST:
      return {...state, contactList: action.payload};

    case SET_FAVORITE_CONTACTS:
      return {...state, favorites: action.payload};
    case SET_ORIGINAL_CONTACTS:
      return {...state, originalList: action.payload};
    case SET_SELECTED_CONTACTS:
      return {...state, selectedContacts: action.payload};
    default:
      return state;
  }
};

export default AppReducer;
