import {
  AnimationOptionsWithOverrides,
  Motion,
  VariantDefinition,
} from "@motionone/solid";
import type { Component } from "solid-js";
import { animate, initial, transition } from "../lib/animations";
import type { Article } from "../types/article";

export const ArticleCard: Component<{ item: Article; idx: number }> = (
  props
) => {
  let ref: HTMLAnchorElement | null = null;

  setTimeout(() => {
    ref?.classList.add("transition-opacity");
  }, 1500);

  return (
    <Motion.a
      rel="prefetch"
      ref={(el) => (ref = el)}
      initial={initial}
      animate={animate}
      transition={transition(props.idx / 100 + (2 + props.idx))}
      href={props.item.url}
      class="w-full flex flex-col py-4 rounded-md no-underline gap-2"
    >
      <div class="w-full flex gap-2 justify-between">
        <p class="font-semibold">{props.item.title}</p>
        <p class="text-accent-500">
          {props.item.date
            .toLocaleDateString()
            .replace(`/${props.item.date.getFullYear()}`, "")}
        </p>
      </div>
      <p class="text-accent-300 font-normal">{props.item.description}</p>
    </Motion.a>
  );
};

export const ArticleYear: Component<{ year: string }> = (props) => (
  <Motion.p
    initial={{ ...(initial as any), transform: "translateX(-0.5rem)" }}
    animate={{ transform: "translateX(0)", opacity: 1 }}
    transition={transition(5)}
    class="font-serif font-bold pt-4 text-accent-500"
  >
    {props.year}
  </Motion.p>
);
