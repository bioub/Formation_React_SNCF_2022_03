import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  user: {
    name: 'Romain'
  }
};

const countSlice = createSlice({
  name: 'count',
  initialState: initialState.count,
  reducers: {
    increment(state, action) {
      return state + (action.payload ?? 1);
    }
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: initialState.user,
  reducers: {
    updateName(state, action) {
      state.name = action.payload; // redux toolkit va transformer ça en {...state, name: action.payload}
    },
  }
})

export const { increment } = countSlice.actions;
export const { updateName } = userSlice.actions;

export const reducer = {
  count: countSlice.reducer,
  user: userSlice.reducer,
};
