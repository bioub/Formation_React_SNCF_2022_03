import { createStore } from "redux";

export function configureStore({ reducer }) {

  // plugins...

  const store = createStore(reducer)

  return store;
}