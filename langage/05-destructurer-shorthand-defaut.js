

const props = { name: 'Romain', age: 36, isTrainer: true };

//    { name: 'Romain', age: 36, isTrainer: true }
// 
// const { age: age } = props;

const { age = 0 } = props;
console.log(age); // 36