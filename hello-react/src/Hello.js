import React from "react";

/*
<div class="Hello">
  Hello <span id="prenom">Romain</span>
</div>
*/

// Avec l'API DOM
// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';

//   divEl.innerText = 'Hello ';

//   const spanEl = document.createElement('span');
//   spanEl.id = 'prenom';
//   spanEl.innerText = 'Romain';

//   divEl.appendChild(spanEl);

//   return divEl;
// }

// Avec l'API React.createElement
// function Hello() {
//   return React.createElement(
//     'div',
//     { className: 'Hello' },
//     'Hello ',
//     React.createElement(
//       'span',
//       { id: 'prenom' },
//       'Romain'
//     )
//   );
// }

// Avec JSX
// function Hello(props) { // { name: 'Romain', age: 36, isTrainer: true }
//   return (
//     <div className="Hello">
//       Hello <span id="prenom">{props.name}</span>
//     </div>
//   );
// }

function Hello({ name = '', age = 0, isTrainer = false}) { // { name: 'Romain', age: 36, isTrainer: true }
  return (
    <div className="Hello">
      Hello <span id="prenom">{name}</span>
    </div>
  );
}

export default Hello;
