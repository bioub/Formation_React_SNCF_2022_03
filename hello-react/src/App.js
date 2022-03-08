import Clock from "./Clock";
import Hello from "./Hello";

function App() {
  const prenom = 'Titi';

  return (
    <div className="App">
      <Hello name="Romain" age={36} isTrainer /> {/* React.createElement(Hello, { name: 'Romain', age: 36, isTrainer: true }) */}
      <Hello name={prenom} />
      <Hello name={"Tata".toUpperCase()} />
      <Clock format="HH:mm:ss" />
    </div>
  );
}

export default App;
