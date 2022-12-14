import { Motion } from "@motionone/solid";
import type { Component } from "solid-js";
import { animate, initial, transition } from "../lib/animations";

export const Heading: Component<{ heading: string; sub: string }> = (props) => (
  <Motion.div initial={initial} animate={animate} transition={transition(0)}>
    <h1 class="text-3xl font-bold">{props.heading}</h1>
    <p class="font-serif italic text-accent-300">{props.sub}</p>
  </Motion.div>
);
