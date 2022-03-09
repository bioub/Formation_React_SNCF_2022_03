import { useEffect, useState } from "react";

// EXEMPLE FICTIF (si ça avait été un objet)
// useState('now', new Date()) // { now: new Date()}
// useState('format', 'HH:mm:ss') // { now: new Date(), format: 'HH:mm:ss' }

function ClockWithHooks() {
  const [now, setNow] = useState(new Date()) // [new Date()]
  const [format, setFormat] = useState('HH:mm:ss') // [new Date(), 'HH:mm:ss']

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