import { increment, updateUserUsername } from "./actions.mjs";
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

// export function countReducer(state = initialState.count, action) {
//   switch (action.type) {
//     case increment.type:
//       return state + (action.payload ?? 1)
//   }

//   return state;
// }

export const countReducer = reduxToolkit.createReducer(initialState.count, {
  [increment]: (state, action) => action.payload ?? 1
});

// export function usersPageReducer(state = initialState.usersPage, action) {
//   switch (action.type) {
//     case updateUserUsername.type:
      // return {
      //   ...state,
      //   user: {
      //     ...state.user,
      //     username: action.payload
      //   }
      // }
//   }

//   return state;
// }

export const usersPageReducer = reduxToolkit.createReducer(initialState.usersPage, {
  // [updateUserUsername] équivalent à [updateUserUsername.type]
  // équivalent à 'UPDATE_USER_USERNAME' (donc )
  [updateUserUsername]: (state, action) => {
    state.user.username = action.payload; // redux toolkit va transformer ça en {...state, user, {....}}
  }
});

export const reducer = {
  count: countReducer,
  usersPage: usersPageReducer,
};
