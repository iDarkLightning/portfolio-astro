import type { Component } from "solid-js";

interface Props {
  to: string;
  alt: string;
  src: string;
}

export const ContactLink: Component<Props> = (props) => (
  <a href={props.to} target="_blank">
    <img src={props.src} alt={props.alt} />
  </a>
);
