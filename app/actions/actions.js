import {
  SET_CONTACT_LIST,
  SET_FAVORITE_CONTACTS,
  SET_ORIGINAL_CONTACTS,
  SET_SELECTED_CONTACTS,
} from './action-types';

export function setContactList(payload) {
  return {type: SET_CONTACT_LIST, payload: payload};
}

export function setFavoriteContacts(payload) {
  return {type: SET_FAVORITE_CONTACTS, payload: payload};
}

export function setOriginalContacts(payload) {
  return {type: SET_ORIGINAL_CONTACTS, payload: payload};
}

export function setSelectedContacts(payload) {
  return {type: SET_SELECTED_CONTACTS, payload: payload};
}
