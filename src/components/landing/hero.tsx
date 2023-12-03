import { scrollDownIndicatorAnimation } from "@/styles/animations/scrollDownIndicator";
import styled from "styled-components";
import { ScrollDownIcon } from "../icons/scrollDown";

export function Hero() {
  return (
    <Style.Container>
      <span>Lorem ipsum dolor</span>
      <hgroup>
        <h1>Game-changing infrastructure</h1>
        <h2>
          A decentralised, non-custodial social graph, empowering players to
          take full ownership of their gaming identities and enabling developers
          to build next-gen applications.{" "}
        </h2>
      </hgroup>
      <button>Join Discord</button>
      <Style.ScrollDown>
        <p>Scroll down</p>
        <ScrollDownIcon />
      </Style.ScrollDown>

      <figure>
        <img className="hero-img-1" src="/backgrounds/landing-first.png" />
        <img className="hero-img-2" src="/backgrounds/landing-second.png" />
      </figure>
    </Style.Container>
  );
}

const Style = {
  Container: styled.main`
    width: var(--width);
    max-width: var(--max-width);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    justify-content: center;
    position: relative;

    figure {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: -8.75vw;
      z-index: 0;

      img.hero-img-1 {
        position: absolute;
        width: 70vw;
      }

      img.hero-img-2 {
        position: absolute;
        width: 62.5vw;
        right: 0;
        top: 5vh;
      }
    }

    span {
      color: var(--Main---Brand, #eb3a4a);
      font-family: "Lexend";
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    h1 {
      color: #e4e4e7;
      font-family: "Integral CF";
      font-size: 64px;
      font-style: normal;
      font-weight: 400;
      line-height: 64px;
      max-width: 50%;
      margin-bottom: 25px;
      z-index: 1;
    }

    h2 {
      color: var(--text-secondary, #cacace);
      font-family: "Lexend";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
      max-width: 40%;
      margin-bottom: 45px;
      z-index: 1;
    }

    button {
      display: flex;
      width: 180px;
      height: 56px;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      border-radius: 8px;
      background: #eb3a4a;
      z-index: 1;
    }
  `,
  ScrollDown: styled.div`
    position: absolute;
    left: calc((100% - 2.78vw) / 2);
    bottom: 5.17vh;
    z-index: 10;
    opacity: 0;
    ${() => scrollDownIndicatorAnimation(2.5, 15, 4)};
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
      font-family: "Lexend";
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      background: -webkit-linear-gradient(45deg, #eb3a4a, #2b2b2b);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `,
};
