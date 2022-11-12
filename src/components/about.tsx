import {
  AnimationOptionsWithOverrides,
  Motion,
  VariantDefinition,
} from "@motionone/solid";
import type { Component } from "solid-js";

const initial: VariantDefinition = {
  transform: "translateY(0.5rem)",
  opacity: 0,
};

const animate: VariantDefinition = {
  transform: "translateY(0)",
  opacity: 0.9,
};

const transition = (multiplier: number): AnimationOptionsWithOverrides => ({
  easing: "ease-in",
  delay: multiplier * 0.1,
});

export const AboutHeading: Component = () => (
  <Motion.div initial={initial} animate={animate} transition={transition(0)}>
    <a href="/">
      <p class="text-sm uppercase font-mono">{"<-"} Index</p>
    </a>
    <h1 class="text-3xl font-bold">About Me</h1>
    <p class="font-serif italic opacity-80">
      A little bit about me, a little bit about the site, and a little bit about
      everything in between
    </p>
  </Motion.div>
);

export const AboutSection: Component<{
  heading: string;
  content: string;
  delay: number;
}> = (props) => (
  <Motion.div
    class="flex flex-col gap-3"
    initial={initial}
    animate={animate}
    transition={transition(props.delay)}
  >
    <h2 class="text-2xl font-semibold">{props.heading}</h2>
    <p>{props.content}</p>
  </Motion.div>
);
