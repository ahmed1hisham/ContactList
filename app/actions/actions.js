import {SET_CONTACT_LIST, SET_FAVORITE_CONTACTS} from './action-types';

export function setContactList(payload) {
  return {type: SET_CONTACT_LIST, payload: payload};
}

export function setFavoriteContacts(payload) {
  return {type: SET_FAVORITE_CONTACTS, payload: payload};
}
