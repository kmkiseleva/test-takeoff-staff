import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  isAuth: boolean,
  email: string | null,
  token: string | null,
  id: string | null
}

const initialState: InitialState = {
  isAuth: false,
  email: null,
  token: null,
  id: null
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuth = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      return initialState;
    }
  },
})

export const {setUser, removeUser} = authSlice.actions;
export default authSlice.reducer;
