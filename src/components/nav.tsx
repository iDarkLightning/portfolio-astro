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
    name: "Writing",
    route: "/writing",
  },
];

export const Nav: Component<{ currentRoute: string }> = (props) => (
  <div class="flex justify-center my-6">
    <nav class="rounded-[6rem] bg-[#111]">
      <ul class="flex">
        {routes.map((item) => (
          <a
            href={item.route}
            class={clsx(
              "no-underline py-4 px-8 rounded-[6rem]",
              item.route === props.currentRoute && "bg-[#222]"
            )}
          >
            <li>{item.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  </div>
);
