import { useState } from "react"

function UserForm({ onUserSubmit = () => {} }) {
  const [name, setName] = useState('Romain');
  
  function handleSubmit(event) {
    event.preventDefault();
    onUserSubmit(name);
  }

  return (
    <form className="UserForm" onSubmit={handleSubmit}>
      <div>
        Name : <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default UserForm