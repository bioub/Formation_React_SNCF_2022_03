import { useState } from "react";

function CounterUncontrolled() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button className="CounterUncontrolled" onClick={handleClick}>
      {count}
    </button>
  )
}

export default CounterUncontrolled;