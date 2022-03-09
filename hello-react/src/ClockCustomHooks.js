import { useNow } from "./hooks/useNow";

function ClockCustomHooks() {
  const now = useNow();

  return (
    <div className="ClockCustomHooks">
      {now.toLocaleTimeString()}
    </div>
  ); 
}

export default ClockCustomHooks;