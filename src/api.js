import axios from "axios";

const request = axios.create({
    baseURL: "https://631e23769f946df7dc3e827f.mockapi.io/akv/phonebook",
});

export const getContacts = async () => {
    const {data} = await request.get("/");
    return data;
}

export const addContact = async (data) => {
    const {data: result} = await request.post("/", data);
    return result;
}

export const removeContact = async (id) => {
    const {data} = await request.delete(`/${id}`);
    return data;
}