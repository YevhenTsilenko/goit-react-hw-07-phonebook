import { 
    getContactsRequest, getContactsSuccess, getContactsError,
    addContactRequest, addContactSuccess, addContactError,
    deleteContactRequest, deleteContactSuccess, deleteContactError
  } from './actions';
  import axios from "axios";
  
  axios.defaults.baseURL = 'http://localhost:4567';
  
  const getContacts = () => async dispatch => {
    dispatch(getContactsRequest());
    try {
       const { data } = await axios.get('/contacts');
        dispatch(getContactsSuccess(data));
    } catch (error) {
        dispatch(getContactsError(error));
    };
  };
  
   const addContact = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };  

    dispatch(addContactRequest());
  
    axios.post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
  };
  
  const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());
  
    axios.delete(`/contacts/${id}`)
      .then(() => dispatch(deleteContactSuccess(id)))
      .catch(error => dispatch(deleteContactError(error)));
  };

export { getContacts, addContact, deleteContact }