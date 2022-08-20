const routes = [
  {
    route: "/",
    name: "Home",
    color: "text-accent",
  },
  {
    route: "/work",
    name: "Work",
    color: "text-cyan-200",
  },
  {
    route: "/about",
    name: "About",
    color: "text-red-300",
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
