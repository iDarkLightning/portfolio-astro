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

export const Nav = (props) => (
  <nav className={`pt-6 ${props.absolute && "absolute"}`}>
    <div className="flex gap-6 opacity-80">
      {routes.map(({ route, name, color }) => (
        <a
          href={route}
          className={`font-medium ${route === props.route ? color : ""}`}
        >
          {name}
        </a>
      ))}
    </div>
  </nav>
);
