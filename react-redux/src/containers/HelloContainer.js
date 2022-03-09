import { useSelector } from 'react-redux';
import Hello from "../components/Hello";
import { nameSelector } from '../store/selectors';

function HelloContainer() {
  const name = useSelector(nameSelector)

  return <Hello name={name} />
}

export default HelloContainer;