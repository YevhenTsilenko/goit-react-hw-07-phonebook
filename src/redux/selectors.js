import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getIsLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getFilteredContacts = createSelector(
    [getContacts, getFilter], 
    (allContacts, filter) => {
        const lowerCasedFilter = filter.toLocaleLowerCase().trim();
        return allContacts.filter(contact => 
            contact.name.toLocaleLowerCase().includes(lowerCasedFilter));
    },
);

export { getContacts, getIsLoading, getFilter, getFilteredContacts }