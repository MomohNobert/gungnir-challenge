import styled from "styled-components";

export function ValueNetwork() {
  return (
    <Style.Container>
      <hgroup>
        <h2>The value network of gaming</h2>
        <h3>
          The fundamental protocol that allows anyone to create gaming
          applications built on top of player identities.
        </h3>
      </hgroup>
      <div className="vn-misc">
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;

    .vn-misc {
      display: flex;
      align-items: center;
      width: 65%;
      justify-content: space-between;

      article {
        height: 245px;
        width: 390px;
        border-radius: 16px;
        border: 1px solid #343434;

        background: rgba(9, 9, 9, 0.8);

        backdrop-filter: blur(10px);
      }
    }

    h2 {
      color: #e4e4e7;
      font-family: "Integral CF";
      font-size: 64px;
      font-style: normal;
      font-weight: 400;
      line-height: 64px;
      max-width: 70%;
      margin: auto;
      margin-bottom: 25px;
    }

    h3 {
      color: var(--text-secondary, #cacace);
      font-family: "Lexend";
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
      max-width: 45%;
      margin: auto;
      margin-bottom: 45px;
    }
  `,
};
