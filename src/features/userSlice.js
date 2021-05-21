import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  // In here the login and logout are called actions
  // These actions can then be dispatch and it will do the appropriate behavoir
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      //resetting back the user to null
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
