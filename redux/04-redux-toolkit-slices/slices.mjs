import reduxToolkit from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  usersPage: {
    user: {
      username: 'Toto',
      age: 36
    }
  }
};

const countSlice = reduxToolkit.createSlice({
  name: 'count',
  initialState: initialState.count,
  reducers: {
    increment(state, action) {
      return state + action.payload ?? 1;
    }
  }
});

const usersPageSlice = reduxToolkit.createSlice({
  name: 'usersPage',
  initialState: initialState.usersPage,
  reducers: {
    updateUserUsername(state, action) {
      state.user.username = action.payload; // redux toolkit va transformer ça en {...state, user, {....}}
    },
    updateUserEmail(state, action) {
      state.user.email = action.payload; // redux toolkit va transformer ça en {...state, user, {....}}
    }
  }
})

export const { increment } = countSlice.actions;
export const { updateUserUsername } = usersPageSlice.actions;

export const reducer = {
  count: countSlice.reducer,
  usersPage: usersPageSlice.reducer,
};
