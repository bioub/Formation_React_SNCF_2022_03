import { useDispatch } from 'react-redux';
import { updateName } from '../store/slices';
import UserForm from '../components/UserForm'

function UserFormContainer() {
  const dispatch = useDispatch();

  function handleSubmit(userName) {
    dispatch(updateName(userName));
  }

  return <UserForm onUserSubmit={handleSubmit}  />
}

export default UserFormContainer;