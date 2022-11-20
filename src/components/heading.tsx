import {
  Motion,
  VariantDefinition,
  AnimationOptionsWithOverrides,
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

export const Heading: Component<{ heading: string; sub: string }> = (props) => (
  <Motion.div initial={initial} animate={animate} transition={transition(0)}>
    <a href="/" class="no-underline">
      <p class="text-sm uppercase font-mono ">{"<-"} Index</p>
    </a>
    <h1 class="text-3xl font-bold">{props.heading}</h1>
    <p class="font-serif italic opacity-80">{props.sub}</p>
  </Motion.div>
);
