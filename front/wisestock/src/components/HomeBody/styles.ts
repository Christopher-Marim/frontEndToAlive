import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-height: 650px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 130px;

  span {
    background-color: white;
    height: 4px;
    width: 30px;
    border-radius: 10px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-family: "Nunito";
    font-style: normal;
    font-size: 40px;
    font-weight: 400;
    color: white;
  }
  h3 {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 400;
    color: ${(props) => props.theme.cinza};
    margin-top: -20px;
  }

  .buttonCompare {
    font-family: "Nunito";
    background-color: transparent;
    color: ${(props) => props.theme.verdeClaro};
    border: none;
    margin-top: 10px;
    text-decoration: underline;
    font-size: 18px;
    cursor: pointer;
  }

  .groupInputs {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0px 20px;
    }
  }
`;

export const HistoryWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 50px;

  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-size: 40px;
    font-weight: 400;
    color: white;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  margin-top: 20px;

  /*   @media screen and (max-width: 1400px){
  } */

  .cardPrincipal {
    background: linear-gradient(
      to right bottom,
      ${(props) => props.theme.verdeClaro},
      ${(props) => props.theme.ciano}
    );
  }
`;

export const Card = styled.div`
  box-sizing: content-box;
  border-width: 2px;
  border-radius: 8px !important;
  border-style: solid;
  border-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.verdeClaro},
    ${(props) => props.theme.ciano}
  );
  border-image-slice: 1;

  width: 260px;
  height: 116px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 20px 40px;
  margin-right: 20px;

  background-color: transparent;

  cursor: pointer;

  .headerCard {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .strockDate {
      @media screen and (max-width: 1400px) {
        display: none;
      }
      color: ${(props) => props.theme.cinza};
    }

    .strockValue {
      color: ${(props) => props.theme.branco};
    }
  }

  .bodyCard {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .strockName {
      color: ${(props) => props.theme.branco};
      font-size: 28px;
      font-family: "Nunito";
      margin-top: 5px;
    }
  }
`;
