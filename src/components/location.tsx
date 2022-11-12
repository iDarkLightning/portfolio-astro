import { FC, useEffect, useState } from "react";

export const Location: FC = () => {
  const [time, setTime] = useState<null | string>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-sm opacity-80 font-mono">{time} New York, US</p>
    </div>
  );
};
