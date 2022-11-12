import { createSignal, Component } from "solid-js";

export const Location: Component = () => {
  const [time, setTime] = createSignal(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
    })
  );

  setInterval(
    () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
        })
      ),
    1000
  );

  return (
    <div>
      <p class="text-sm opacity-80 font-mono">{time} New York, US</p>
    </div>
  );
};
