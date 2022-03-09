import CounterContainer from "../containers/CounterContainer";
import UserFormContainer from "../containers/UserFormContainer";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <UserFormContainer />

      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
    </div>
  );
}

export default App;
