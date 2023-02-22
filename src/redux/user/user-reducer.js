import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getPostsById, getAlbumsById } from "./user-operations";

const initialState = {
    users: [],
    posts: [],
    albums: [],
    isLoading: false,
    error: null,
};

export const usersSlice = createSlice({
    name: "users",
    initialState,

    extraReducers: (builder) => {
        builder
            // ------------------getAllUsers---------------------------
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllUsers.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.users = payload;
            })
            .addCase(getAllUsers.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            // ------------------getPostsById---------------------------
            .addCase(getPostsById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPostsById.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.posts = payload;
            })
            .addCase(getPostsById.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            //----------------------getAlbumsById------------------------------
            .addCase(getAlbumsById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAlbumsById.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.albums = payload;
            })
            .addCase(getAlbumsById.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

// export const { actions } = usersSlice;
export default usersSlice.reducer;
