import { updateUserUsername } from "./slices.mjs";
import { usernameSelector } from "./selectors.mjs";

class Profile {
  constructor(store) {
    this.store = store;
    this.store.subscribe(() => {
      const state = this.store.getState();
      console.log('username', usernameSelector(state));
    });
  }
  handleClick() {
    this.store.dispatch(updateUserUsername('Lydie'));
  }
}

export default Profile;