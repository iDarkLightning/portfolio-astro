import type { Component } from "solid-js";
import { Location } from "./location";
import {
  AnimationOptionsWithOverrides,
  Motion,
  Presence,
  VariantDefinition,
} from "@motionone/solid";
import { ContactLink } from "./contact-link";
import { Arrow } from "./arrow";

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

const initial: VariantDefinition = {
  transform: "translateY(0.5rem)",
  opacity: 0,
};

const animate: VariantDefinition = {
  transform: "translateY(0)",
  opacity: 1,
};

const transition = (multiplier: number): AnimationOptionsWithOverrides => ({
  easing: "ease-in",
  delay: multiplier * 0.1,
});

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
    class="opacity-80 flex flex-col gap-4"
    initial={initial}
    animate={{ ...animate, opacity: 0.8 }}
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
    class="flex flex-col gap-4"
    initial={initial}
    animate={{ ...animate, opacity: 0.9 }}
    transition={transition(4.3)}
  >
    <a
      class="text-2xl flex gap-2 items-center opacity-90 no-underline"
      href="/about"
    >
      See More About Me
      <Arrow />
    </a>
    <div class="flex gap-8">
      <ContactLink
        to="https://twitter.com/iDarkThunder"
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
