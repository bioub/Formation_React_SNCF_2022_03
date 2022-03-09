function CounterControlled({ count = 0, onIncrement = () => {} }) {
  function handleClick() {
    onIncrement();
  }

  return (
    <button className="CounterControlled" onClick={handleClick}>
      {count}
    </button>
  )
}

export default CounterControlled;