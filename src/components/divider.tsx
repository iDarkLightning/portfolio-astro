import type { Component } from "solid-js";

export const Divider: Component<{ idx: number; list: any[] }> = (props) => {
  return props.idx !== props.list.length - 1 ? <hr class="opacity-30" /> : null;
};
