import { createAction } from '@reduxjs/toolkit'

const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction('contacts/getContactsSuccess');
const getContactsError = createAction('contacts/getContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const filterContacts = createAction('filter');

export { 
  getContactsRequest, getContactsSuccess, getContactsError,
  addContactRequest, addContactSuccess, addContactError,
  deleteContactRequest, deleteContactSuccess, deleteContactError,
  filterContacts
}

