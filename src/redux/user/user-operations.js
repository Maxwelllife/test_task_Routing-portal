import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users";

export const getAllUsers = createAsyncThunk(
    "users/feachAllUsers",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get("/");

            return data;
        } catch (error) {
            return rejectWithValue(
                error.response.data.message || error.message
            );
        }
    }
);
export const getPostsById = createAsyncThunk(
    "posts/feachAllPosts",
    async (userId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/${userId}/posts/`);
            return data;
        } catch (error) {
            return rejectWithValue(
                error.response.data.message || error.message
            );
        }
    }
);
export const getAlbumsById = createAsyncThunk(
    "posts/feachAllAlbums",
    async (userId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/${userId}/albums/`);
            return data;
        } catch (error) {
            return rejectWithValue(
                error.response.data.message || error.message
            );
        }
    }
);
