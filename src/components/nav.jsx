const routes = [
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
  <nav className={`pt-6 flex justify-between`}>
    <a className="font-bold text-2xl" href="/">
      Nirjhor Nath.
    </a>

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
