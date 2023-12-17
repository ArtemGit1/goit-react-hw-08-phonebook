import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './operations';

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(contactsOperations.fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = action.payload;
            })
            .addCase(contactsOperations.addContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(action.payload);
            })
            .addCase(contactsOperations.deleteContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter(
                    item => item.id !== action.payload.id
                );
            })
            .addMatcher(action => action.type.endsWith('/pending'),
                (state) => {
                    state.contacts.isLoading = true;
                    state.contacts.error = null;
                })
            .addMatcher(action => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.contacts.isLoading = false;
                    state.contacts.error = action.error;
                })
    },
});
export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;


