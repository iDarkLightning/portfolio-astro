import { Motion } from "@motionone/solid";
import { Component, onMount } from "solid-js";
import { animate, initial, transition } from "../lib/animations";

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

export const Signature: Component = () => {
  let ref: any;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("signature-animation");
        }
      });
    });

    observer.observe(ref);
  });

  return (
    <svg
      ref={ref}
      class="signature"
      width="339"
      height="114"
      viewBox="0 0 339 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="selector"
        d="M5.30318 52.687C4.41544 52.9999 3.34141 53.2598 2.50349 52.6665C-0.986129 50.1957 2.42552 45.4968 4.42179 43.2926C13.8888 32.8395 27.4945 23.8012 40.6623 16.5072C44.9104 14.154 80.0091 -4.99798 80.7134 8.46951C81.109 16.032 76.4539 24.4305 72.755 31.1436C67.2598 41.1169 59.9277 50.3089 52.6387 59.4913C40.3304 74.997 27.1584 90.3839 17.2278 106.977C16.1509 108.777 13.8439 113.85 16.0353 112.877C21.2642 110.555 26.1893 105.529 30.1634 102.229C52.6127 83.5852 73.1716 63.6527 93.5972 43.6215C106.456 31.011 119.084 17.9707 133.778 6.63996C134.649 5.96795 140.781 0.566069 143.058 1.02797C143.471 1.1116 143.642 1.61956 143.577 1.95303C143.17 4.03752 140.032 8.8235 139.17 10.0524C125.307 29.8134 106.276 46.9897 91.9381 66.5423C83.4026 78.1821 75.4169 91.2454 72.4958 104.654C72.1723 106.14 70.7904 111.029 74.5697 111.13C78.7137 111.241 83.6367 107.174 86.1832 105.271C98.2722 96.2395 107.273 85.3348 117.965 75.3817C122.947 70.7437 110.487 86.0465 107.388 91.6215C105.887 94.3229 102.91 98.7511 103.603 101.941C104.217 104.762 108.913 102.559 110.292 101.818C113.614 100.03 118.217 96.3821 120.765 94.2116C129.708 86.5925 137.742 78.2815 145.625 69.9753C154.175 60.9663 162.411 51.778 170.692 42.6142C172.791 40.2924 178.997 33.3196 177.329 35.8511C173.565 41.5605 168.678 46.9165 164.367 52.3581C157.239 61.356 150.41 70.4774 143.707 79.678C137.659 87.9789 131.779 96.37 125.431 104.531C124.292 105.995 123.126 107.447 121.905 108.869C121.128 109.774 119.129 112.325 119.028 111.233C118.748 108.2 123.955 101.517 125.275 99.4331C133.137 87.0292 141.892 74.9825 150.732 63.0065C161.921 47.8461 195.994 2.70833 186.402 18.5423C180.663 28.0158 173.573 37.1216 166.752 46.1089C157.345 58.5049 147.746 70.9069 136.863 82.5354C130.8 89.0137 123.5 97.1396 113.921 100.79C109.777 102.369 103.797 102.541 102.333 98.2613C101.094 94.6379 102.652 90.4949 104.018 87.1607C107.395 78.9184 112.774 70.8534 119.313 63.911C121.585 61.499 127.32 55.108 132.56 57.1684C137.221 59.0017 137.792 65.1298 138.444 68.5157C139.19 72.3855 138.714 77.4041 141.088 80.9937C143.275 84.2986 148.679 83.9126 152.546 83.1932C162.286 81.3814 171.36 76.923 179.636 72.6887C189.924 67.4251 199.468 61.4248 209.007 55.3594C211.49 53.7801 213.933 52.1596 216.447 50.6108C218.304 49.4667 223.321 46.1181 222.616 47.8973C222.137 49.1082 221.036 50.107 220.154 51.1658C212.688 60.1246 216.589 54.6195 208.644 64.61C204.947 69.2582 186.084 90.1938 200.4 94.4172C208.277 96.7411 219.356 93.6108 226.686 91.8682C240.018 88.699 252.641 84.27 265.415 79.9453C280.671 74.7804 295.838 69.6817 312.025 66.604C321.16 64.8672 328.908 65.0084 338 64.5277"
        stroke="#ACA7A7"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
