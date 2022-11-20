import type { Component } from "solid-js";
import clsx from "clsx";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Writing",
    route: "/writing",
  },
];

export const Nav: Component<{ currentRoute: string }> = (props) => (
  <div class="flex justify-center my-6">
    <nav class="rounded-[6rem] bg-[#111]">
      <ul class="flex">
        {routes.map((item) => (
          <li
            class={clsx(
              "no-underline py-2 px-4 rounded-[6rem] lg:py-4 lg:px-8",
              item.route === props.currentRoute && "bg-[#222]"
            )}
          >
            <a href={item.route} class="no-underline">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);
