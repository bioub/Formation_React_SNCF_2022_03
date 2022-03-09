import ClockCustomHooks from "./ClockCustomHooks";
import ClockWithHooks from "./ClockWithHooks";
import ClockWithoutHook from "./ClockWithoutHook";
import Counter from "./Counter";
import Hello from "./Hello";
import Select from "./Select";

function App() {
  const prenom = 'Titi';

  return (
    <div className="App">
      <Hello name="Romain" age={36} isTrainer /> {/* React.createElement(Hello, { name: 'Romain', age: 36, isTrainer: true }) */}
      <Hello name={prenom} />
      <Hello name={"Tata".toUpperCase()} />
      <ClockWithoutHook format="HH:mm:ss" />
      <ClockWithHooks format="HH:mm:ss" />
      <ClockCustomHooks format="HH:mm:ss"  /> 
      <Counter />
      <Counter />
      <Counter />
      <Select options={['Chocolate', 'Strawberry', 'Vanilla']} defaultValue='Strawberry' />
    </div>
  );
}

export default App;
