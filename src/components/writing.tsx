import {
  AnimationOptionsWithOverrides,
  Motion,
  VariantDefinition,
} from "@motionone/solid";
import type { Component } from "solid-js";
import type { Article } from "../types/article";

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

export const ArticleCard: Component<{ item: Article; idx: number }> = (
  props
) => (
  <Motion.a
    initial={initial}
    animate={animate}
    transition={transition(props.idx / 100 + (2 + props.idx))}
    href={props.item.url}
    class="w-full flex flex-col hover:bg-[#141414] p-4 rounded-md transition-all no-underline gap-2"
  >
    <div class="w-full flex gap-2 justify-between">
      <p class="font-semibold">{props.item.title}</p>
      <p class="text-accent">{props.item.date.toLocaleDateString()}</p>
    </div>
    <p class="opacity-80 font-normal">{props.item.description}</p>
  </Motion.a>
);

export const ArticleYear: Component<{ year: string }> = (props) => (
  <Motion.p
    initial={{ ...initial, transform: "translateX(-0.5rem)" }}
    animate={{ transform: "translateX(0)", opacity: 0.8 }}
    transition={transition(5)}
    class="font-serif font-bold pt-4"
  >
    {props.year}
  </Motion.p>
);
