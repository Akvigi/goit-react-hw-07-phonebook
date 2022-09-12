import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api'


export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkAPI) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const isExist = (item, array) => {
    let exist = false
    if (array) {
      array.forEach(cont => {
        if (cont.name.toLowerCase() === item.name.toLowerCase()) {
          return exist = true
        }
      })
    }
    return exist
  }

export const addContact = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {contacts} = getState();
            if(isExist(data, contacts.items)) {
                alert(`${data.name} is alredy exist`);
                return false;
            }
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            await api.removeContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)