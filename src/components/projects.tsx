import { Motion } from "@motionone/solid";
import type { Component } from "solid-js";
import { animate, initial, transition } from "../lib/animations";
import type { Project } from "../types/project";

export const ProjectCard: Component<{ project: Project; idx: number }> = (
  props
) => {
  let ref: HTMLAnchorElement | null = null;

  setTimeout(() => {
    ref?.classList.add("transition-opacity");
  }, (props.idx / 100 + (2 + props.idx)) * 0.5);

  return (
    <Motion.a
      href={props.project.link}
      initial={initial}
      animate={animate}
      transition={transition(props.idx / 100 + (2 + props.idx))}
      ref={(el) => (ref = el)}
      class="no-underline w-full flex gap-2 justify-between items-center py-4 rounded-md"
    >
      <div class="flex flex-col">
        <p class="font-semibold">{props.project.name}</p>
        <p class="opacity-80 font-normal">{props.project.description}</p>
      </div>
      <p class="text-accent font-serif">{props.project.year}</p>
    </Motion.a>
  );
};
