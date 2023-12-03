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
        <article>
          <h4>Gaming social layer</h4>
          <p>Gamers take control of their data.</p>
          <img src="/home.png" />
        </article>
        <article>
          <h4>Build next-gen fat dapps</h4>
          <p>Plug any apps on top of the gaming social layer.</p>
          <img src="/star.png" />
        </article>
      </div>

      <figure>
        <img className="vn-img-1" src="/sphere-1.png" />
        <img className="vn-img-2" src="/sphere-2.png" />
      </figure>
    </Style.Container>
  );
}

const Style = {
  Container: styled.section`
    width: var(--width);
    max-width: var(--max-width);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    position: relative;
    margin-top: 15vh;

    figure {
      position: absolute;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: -8.75vw;
      z-index: 0;

      img.vn-img-1 {
        position: absolute;
        width: 6.5vw;
        left: 0;
        top: 21.5vh;
      }

      img.vn-img-2 {
        position: absolute;
        width: 6.5vw;
        left: 7.5vw;
        top: 45vh;
      }
    }

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
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h4 {
          color: #e4e4e7;
          font-family: "Lexend";
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          height: 20%;
        }

        p {
          color: var(--text-secondary, #cacace);
          font-family: "Lexend";
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 20px;
          height: 25%;
        }
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
