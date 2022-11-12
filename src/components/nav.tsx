import type { FC } from "react";

const routes = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/work",
    name: "Work",
  },
  {
    route: "/about",
    name: "About",
  },
  {
    route: "/writing",
    name: "Writing",
  },
];

export const Nav: FC<{ absolute: boolean }> = (props) => (
  <nav className={`mt-8 ${props.absolute && "absolute"}`}>
    <div className="flex gap-6 opacity-80 ml-[-0.5rem]">
      {routes.map(({ route, name }, idx) => (
        <a href={route} key={idx}>
          {name}
        </a>
      ))}
    </div>
  </nav>
);
