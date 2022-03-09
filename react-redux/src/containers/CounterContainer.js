import { useSelector, useDispatch } from 'react-redux';
import CounterControlled from '../components/CounterControlled';
import { countSelector } from '../store/selectors';
import { increment } from '../store/slices';

function CounterContainer() {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  return <CounterControlled count={count} onIncrement={handleIncrement} />
}

export default CounterContainer;