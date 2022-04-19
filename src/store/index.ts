import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authReducer";
import contactsSlice from "./contactsReducer";

const store = configureStore({
  reducer: {
    authSlice,
    contactsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
