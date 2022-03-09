import { configureStore } from "./configureStore.mjs";
import { reducer } from "./reducers.mjs";
import UserForm from "./UserForm.mjs";
import Profile from "./Profile.mjs";


const store = configureStore({ reducer });

// 2 composants simulés (mounted)
const userForm = new UserForm(store);
const profile = new Profile(store);


userForm.handleSubmit();
profile.handleClick();