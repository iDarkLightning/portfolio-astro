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
  <nav
    className={`py-8 flex flex-col w-full md:flex-row md:items-center justify-between  ${
      props.absolute && "absolute"
    }`}
  >
    <a className="font-bold text-2xl" href="/">
      Nirjhor Nath.
    </a>
    <div className="flex gap-6 opacity-80 ml-[-0.5rem]">
      {routes.map(({ route, name }) => (
        <a
          href={route}
          className={`font-medium p-2 rounded-lg transition-colors ${
            route === props.route ? "bg-[#131827]" : ""
          } hover:bg-[#131827]`}
        >
          {name}
        </a>
      ))}
    </div>
  </nav>
);
