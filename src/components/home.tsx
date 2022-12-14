import { Motion } from "@motionone/solid";
import type { Component } from "solid-js";
import { animate, initial, transition } from "../lib/animations";
import { Arrow } from "./arrow";
import { ContactLink } from "./contact-link";
import { Location } from "./location";

export const Home: Component = () => (
  <>
    <div class="flex flex-col gap-2">
      <HomeHeading />
      <HomeSubHeading />
    </div>
    <HomeDescription />
    <HomeMore />
  </>
);

const HomeHeading: Component = () => (
  <Motion.div initial={initial} animate={animate} transition={transition(0)}>
    <Location />
    <h1 class="font-bold text-3xl">Nirjhor Nath</h1>
  </Motion.div>
);

const HomeSubHeading: Component = () => (
  <Motion.p
    class="text-2xl font-serif italic font-medium"
    initial={initial}
    animate={animate}
    transition={transition(2.3)}
  >
    Trying to create software that feels magical
  </Motion.p>
);

const HomeDescription: Component = () => (
  <Motion.p
    class="text-accent-300 flex flex-col gap-4"
    initial={initial}
    animate={animate}
    transition={transition(3.1)}
  >
    <span class="md:max-w-2xl">
      Student, developer, and designer taking a pragmatic user-focused approach
      to software development.
    </span>
    <span> Passionate about building technology on the bleeding edge.</span>
  </Motion.p>
);

const HomeMore: Component = () => (
  <Motion.div
    class="text-accent-100 flex flex-col gap-4"
    initial={initial}
    animate={animate}
    transition={transition(4.3)}
  >
    <a
      class="text-2xl flex gap-2 items-center no-underline"
      href="/about"
      rel="prefetch"
    >
      See More About Me
      <Arrow />
    </a>
    <div class="flex gap-8">
      <ContactLink
        to="https://twitter.com/nirjhordev"
        alt="Twitter"
        src="/twitter.svg"
      />
      <ContactLink
        to="https://github.com/iDarkLightning"
        alt="GitHub"
        src="/github.svg"
      />
      <ContactLink
        to="https://www.linkedin.com/in/nirjhor-nath-b82317232/"
        alt="LinkedIn"
        src="/linkedin.svg"
      />
    </div>
  </Motion.div>
);
