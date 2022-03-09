import { updateUserUsername } from "./slices.mjs";
import { usernameSelector } from "./selectors.mjs";

class UserForm {
  constructor(store) {
    this.store = store;
    this.store.subscribe(() => {
      const state = this.store.getState();
      console.log('username', usernameSelector(state));
    });
  }
  handleSubmit() {
    this.store.dispatch(updateUserUsername('Romain'));
  }
}

export default UserForm;