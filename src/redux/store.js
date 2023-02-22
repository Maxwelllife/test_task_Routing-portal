import { configureStore, combineReducers } from "@reduxjs/toolkit";

import usersReducer from "./user/user-reducer";

const rootReducer = combineReducers({
    users: usersReducer,

});

export const store = configureStore({
    reducer: rootReducer,
});
