import { css, keyframes } from "styled-components";

const backgroundClip = () => keyframes`
  0% {
		background-position: 0% 100%;
	}
	50% {
		background-position: 100% 0%;
	}
	100% {
		background-position: 0% 100%;
	}
`;

export function backgroundClipAnimation(
  color1: string = "#2d2d2d",
  color2: string = "#ababab",
) {
  return css`
    background: linear-gradient(90deg, ${color1}, ${color2});
    background-size: 150% 150%;
    animation: ${backgroundClip} 2.5s ease infinite;
  `;
}
