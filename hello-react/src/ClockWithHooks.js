import { useEffect, useState } from "react";

// EXEMPLE FICTIF (si ça avait été un objet)
// useState('now', new Date()) // { now: new Date()}
// useState('format', 'HH:mm:ss') // { now: new Date(), format: 'HH:mm:ss' }

function ClockWithHooks() {
  const [now, setNow] = useState(new Date()) // [new Date()]
  const [format, setFormat] = useState('HH:mm:ss') // [new Date(), 'HH:mm:ss']

  // pas de 2e param, componentDidMount + componentDidUpdate
  useEffect(() => { console.log('componentDidMount + componentDidUpdate') });

  // 2e param tableau vide, componentDidMount
  useEffect(() => { console.log('componentDidMount') }, []);

  // 2e param tableau remplit, componentDidMount + componentDidUpdate (si le param change)
  // dans cet ex : si now change
  useEffect(() => { console.log('componentDidMount + componentDidUpdate [now]') }, [now]);

  // 2e param tableau remplit, componentDidMount + componentDidUpdate (si le param change)
  // dans cet ex : si now change
  useEffect(() => { console.log('componentDidMount + componentDidUpdate [format]') }, [format]);

  useEffect(() => {
    // componentDidMount
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, [])

  return (
    <div className="ClockWithHooks">
      {now.toLocaleTimeString()}
    </div>
  ); 
}

export default ClockWithHooks;