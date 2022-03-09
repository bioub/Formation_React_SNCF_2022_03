import { useState } from "react";
import ClockCustomHooks from "./ClockCustomHooks";
import ClockWithHooks from "./ClockWithHooks";
import ClockWithoutHook from "./ClockWithoutHook";
import CounterControlled from "./CounterControlled";
import CounterUncontrolled from "./CounterUncontrolled";
import Hello from "./Hello";
import Select from "./Select";
import UserForm from "./UserForm";

function App() {
  const prenom = 'Titi';
  const [count, setCount] = useState(10);

  return (
    <div className="App">
      <Hello name="Romain" age={36} isTrainer /> {/* React.createElement(Hello, { name: 'Romain', age: 36, isTrainer: true }) */}
      <Hello name={prenom} />
      <Hello name={"Tata".toUpperCase()} />
      <ClockWithoutHook format="HH:mm:ss" />
      <ClockWithHooks format="HH:mm:ss" />
      <ClockCustomHooks format="HH:mm:ss"  /> 
      <CounterUncontrolled />
      <CounterUncontrolled />
      <CounterUncontrolled />
      <Select options={['Chocolate', 'Strawberry', 'Vanilla']} defaultValue='Strawberry' />

      <CounterControlled count={count} onIncrement={() => setCount(count + 1)} />
      <CounterControlled count={count} onIncrement={() => setCount(count + 1)} />
      <CounterControlled count={count} onIncrement={() => setCount(count + 1)} />

      <UserForm />
    </div>
  );
}

export default App;
