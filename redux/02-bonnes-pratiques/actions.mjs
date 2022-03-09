// action creator
// une fonction qui créé l'action et garantie

import { UPDATE_USER_USERNAME } from "./constants.mjs";

// qu'elle est toujours créée de la même façon
export function updateUserUsername(username) {
  // FSA : Flux Standard Action
  // { type: 'TYPE', payload: 'valeur' }
  return {
    type: UPDATE_USER_USERNAME,
    payload: username,
  };
}
