const nomComplet = 'Romain Bohdanowicz';

// const tmp = nomComplet.split(' '); // ['Romain', 'Bohdanowicz']
// const prenom = tmp[0];
// const nom = tmp[0];

//    ['Romain', 'Bohdanowicz']
const [prenom  , nom          ] = nomComplet.split(' ');
console.log(prenom, nom); // Romain, Bohdanowicz


const props = { name: 'Romain', age: 36, isTrainer: true };

//    { name: 'Romain', age: 36, isTrainer: true }
const { name: firstName } = props;
console.log(firstName); // Romain