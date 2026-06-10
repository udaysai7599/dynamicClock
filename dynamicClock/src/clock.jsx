import { useState, useEffect } from "react";
import { format } from "date-fns";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <h1>Digital Clock</h1>

      <h2>
        {format(currentTime, "EEEE, dd MMMM yyyy")}
      </h2>

      <h3>
        {format(currentTime, "hh:mm:ss a")}
      </h3>
    </div>
  );
}

export default Clock;