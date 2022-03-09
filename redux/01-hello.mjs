import { createStore } from 'redux';


const initialState = {
  count: 0,
  user: {
    username: 'Toto',
    age: 36
  }
};

// Fonction Pure
// - ne modifie pas ses paramètres
// - doit être prédictive
// ex de fonction prédictive : sum(1, 20) === 21
// ex de fonction non prédictive : random(1, 20) === ???
// reducer({ count: 10 }, { type: 'INCREMENT' }) === { count: 11 }
// reducer({ count: 20 }, { type: 'INCREMENT' }) === { count: 21 }
// reducer({ count: 20 }, { type: 'CHANGE_PASSWORD' }) === { count: 20 }
// - ne doit pas avoir de side effect
// pas d'appels extérieur (pas de requête ajax, pas d'appel au localStorage)
// pas de code asynchrone (setTimeout, setInterval)
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state, // prend le contenu de l'objet state précédent (SPREAD Operator)
        count: state.count + (action.step ?? 1), // et fait cette modification
      };
    case 'UPDATE_USER_USERNAME':
      return {
        ...state,
        user: {
          ...state.user,
          username: action.username
        }
      }
  }

  return state;
}

/** @type {import('redux').Store} */
const store = createStore(reducer)

store.subscribe(() => {
  console.log('subscribe');
  console.log(store.getState())
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT', step: 10 });
store.dispatch({ type: 'INCREMENT' });


store.dispatch({ type: 'UPDATE_USER_USERNAME', username: 'Romain' });