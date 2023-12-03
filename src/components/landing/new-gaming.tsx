import { backgroundClipAnimation } from "@/styles/animations/backgroundClip";
import styled from "styled-components";

const accounts = [
  {
    name: "MonkeyIslander872",
    img: "/avatars/monkey.png",
  },
  {
    name: "mean_deal_",
    img: "/avatars/luffy.png",
  },
  {
    name: "TennisChallenger",
    img: "/avatars/tennis.png",
  },
  {
    name: "DoozieWoozie",
    img: "/avatars/doozie.png",
  },
  {
    name: "tired0fbeIngWired",
    img: "/avatars/tired.png",
  },
  {
    name: "Greendragon_",
    img: "/avatars/dragon.png",
  },
];

export function NewGaming() {
  return (
    <Style.Container>
      <hgroup>
        <h2>The New Gaming Web</h2>
        <h3>
          At the core of the XBorg Data Graph Protocol lies a dynamic and
          interconnected network of gaming profiles. Each player{"'"}s profile
          is represented as a unique ERC-721 NFT, complete with metadata unique
          to their gaming journey.
        </h3>
      </hgroup>
      <div className="ng-misc">
        {accounts.map((acc) => (
          <article>
            <img src={acc.img} />
            <p>{acc.name}</p>
          </article>
        ))}
      </div>
      <figure>
        <img className="ng-img-1" src="/bubbles.png" />
      </figure>
    </Style.Container>
  );
}

const Style = {
  Container: styled.section`
    width: var(--width);
    max-width: var(--max-width);
    height: 100vh;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;

    figure {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: -8.75vw;
      z-index: 0;
      overflow: hidden;

      img.ng-img-1 {
        position: absolute;
        width: 95vw;
        right: -50vw;
        mix-blend-mode: soft-light;
        top: 0;
        transform: rotate(-12deg);
        z-index: 0;
      }
    }

    .ng-misc {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 50%;
      justify-content: space-between;
      height: 40%;
      margin-top: 27.5vh;
      z-index: 1;

      article {
        width: 47.5%;
        height: 80px;
        border-radius: 55px;
        border: 1px solid #343434;
        background: rgba(9, 9, 9, 0.8);
        backdrop-filter: blur(10px);
        margin-bottom: 24px;
        background-color: #080808;
        border: 1px solid rgba(52, 52, 52, 0.5);
        display: flex;
        align-items: center;

        img {
          height: 64px;
          border-radius: 50%;
          margin: 0 8px;
        }

        p {
          font-family: "Lexend";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          ${() => backgroundClipAnimation()}
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    hgroup {
      height: 50%;
      width: 40%;
      margin-top: 27.5vh;
    }

    h2 {
      color: #e4e4e7;
      font-family: "Integral CF";
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 48px;
      max-width: 281px;
      margin-bottom: 32px;
    }

    h3 {
      color: var(--text-secondary, #cacace);
      font-family: "Lexend";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
      max-width: 387px;
    }
  `,
};
