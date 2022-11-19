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
  opacity: 1,
};

const transition = (multiplier: number): AnimationOptionsWithOverrides => ({
  easing: "ease-in",
  delay: multiplier * 0.1,
});

export const ProjectCard: Component<{ project: any; idx: number }> = (
  props
) => (
  <Motion.a
    initial={initial}
    animate={animate}
    transition={transition(props.idx / 100 + (2 + props.idx))}
    href={props.project.link}
    class="no-underline w-full flex gap-2 justify-between items-center hover:bg-[#222] transition-all p-4 rounded-md"
  >
    <div class="flex flex-col">
      <p class="font-semibold">{props.project.name}</p>
      <p class="opacity-80 font-normal">{props.project.description}</p>
    </div>
    <p class="text-accent font-serif">{props.project.year}</p>
  </Motion.a>
);
