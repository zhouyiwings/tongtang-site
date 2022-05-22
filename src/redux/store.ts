import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appReducer from "./reducer/app";

const store = configureStore({
    reducer: combineReducers({ app: appReducer }),
});

export default store;
export type IApplicationState = ReturnType<typeof store.getState>;