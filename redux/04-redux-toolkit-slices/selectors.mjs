export function usernameSelector(state) {
  return state.usersPage.user.username.toUpperCase();
}