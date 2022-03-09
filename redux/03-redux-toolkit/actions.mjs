// action creator
// une fonction qui créé l'action et garantie

import reduxToolkit from "@reduxjs/toolkit";

// qu'elle est toujours créée de la même façon
// export function updateUserUsername(username) {
//   // FSA : Flux Standard Action
//   // { type: 'TYPE', payload: 'valeur' }
//   return {
//     type: UPDATE_USER_USERNAME,
//     payload: username,
//   };
// }

export const updateUserUsername = reduxToolkit.createAction('UPDATE_USER_USERNAME');
export const increment = reduxToolkit.createAction('INCREMENT');
