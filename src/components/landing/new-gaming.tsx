import styled from "styled-components";

export function NewGaming() {
  return (
    <Style.Container>
      <hgroup>
        <h2>The New Gaming Web</h2>
        <h3>
          At the core of the XBorg Data Graph Protocol lies a dynamic and
          interconnected network of gaming profiles. Each player's profile is
          represented as a unique ERC-721 NFT, complete with metadata unique to
          their gaming journey.
        </h3>
      </hgroup>
      <div className="vn-misc">
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
        <article></article>
      </div>
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
    margin-top: 20vh;

    .vn-misc {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 50%;
      justify-content: space-between;
      height: 40%;

      article {
        width: 47.5%;
        height: 30%;
        border-radius: 55px;
        border: 1px solid #343434;
        background: rgba(9, 9, 9, 0.8);
        backdrop-filter: blur(10px);
        margin-bottom: 24px;
      }
    }

    hgroup {
      height: 50%;
      width: 40%;
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
