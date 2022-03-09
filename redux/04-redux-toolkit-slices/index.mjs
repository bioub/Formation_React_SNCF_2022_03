import { reducer } from "./slices.mjs";
import UserForm from "./UserForm.mjs";
import Profile from "./Profile.mjs";
import reduxToolkit from "@reduxjs/toolkit";


const store = reduxToolkit.configureStore({ reducer });

// 2 composants simulés (mounted)
const userForm = new UserForm(store);
const profile = new Profile(store);


userForm.handleSubmit();
profile.handleClick();