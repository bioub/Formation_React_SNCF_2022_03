import { combineReducers } from "redux";
import { INCREMENT, UPDATE_USER_USERNAME } from "./constants.mjs";

const initialState = {
  count: 0,
  usersPage: {
    user: {
      username: 'Toto',
      age: 36
    }
  }
};

export function countReducer(state = initialState.count, action) {
  switch (action.type) {
    case INCREMENT:
      return state + (action.payload ?? 1)
  }

  return state;
}


export function usersPageReducer(state = initialState.usersPage, action) {
  switch (action.type) {
    case UPDATE_USER_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload
        }
      }
  }

  return state;
}

export const reducer = combineReducers({
  count: countReducer,
  usersPage: usersPageReducer,
});
