import { useEffect, useState } from "react";

export function useNow() {
  const [now, setNow] = useState(new Date()); // [new Date()]

  useEffect(() => {
    // componentDidMount
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return now;
}