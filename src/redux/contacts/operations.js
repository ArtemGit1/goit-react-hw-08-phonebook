// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/auth/auth-operations";

const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await instance.get("contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
const addContact = createAsyncThunk(
    "contacts/addContact",
    async (items, thunkAPI) => {
        try {
            const response = await instance.post("contacts", items);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await instance.delete(`contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
const contactsOperations = {
    deleteContact,
    addContact,
    fetchContacts
};
export default contactsOperations;

