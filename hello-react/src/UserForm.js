import { useState } from "react"

function UserForm() {
  const [username, setUsername] = useState('Toto');
  const [newsletter, setNewsletter] = useState(false);
  const [description, setDescription] = useState('Ma description');
  const [annee, setAnnee] = useState(2022);

  return (
    <form className="UserForm">
      <div>
        Username : <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div>
        Newsletter : <input type="checkbox" name="newsletter" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} />
      </div>
      <div>
        Description :
        <textarea name="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
      </div>
      <div>
        Année :
        <select name="annee" value={annee} onChange={(event) => setAnnee(event.target.value)}>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </form>
  )
}

export default UserForm