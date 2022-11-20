import type {
  AnimationOptionsWithOverrides,
  VariantDefinition,
} from "@motionone/solid";

export const initial: VariantDefinition = {
  transform: "translateY(0.5rem)",
  opacity: 0,
};

export const animate: VariantDefinition = {
  transform: "translateY(0)",
  opacity: 1,
};

export const transition = (
  multiplier: number
): AnimationOptionsWithOverrides => ({
  easing: "ease-in",
  delay: multiplier * 0.1,
});
