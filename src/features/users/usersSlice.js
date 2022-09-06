import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "John Adams" },
  { id: "1", name: "Carl May" },
  { id: "2", name: "Stephen King" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
