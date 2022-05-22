import styled from "styled-components";

export const Container = styled.div`
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

  .buttonSimulation {
    font-family: "Nunito";
    background-color: transparent;
    color: ${(props) => props.theme.verdeClaro};
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.theme.verdeClaro};
    border-radius: 8px;
    margin-top: 10px;
    font-size: 18px;
    padding: 10px 40px;
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

export const CardsWrapper = styled.div`
  width: 100%;
  min-width:600px ;


  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  flex-wrap: wrap;

  margin-top: 20px;

  /*   @media screen and (max-width: 1400px){
  } */

  .cardPrincipal {
    background: linear-gradient(
      to left bottom,
      ${(props) => props.theme.verdeClaro},
      ${(props) => props.theme.ciano}
    );

    @media screen and (max-width: 1470px) {
      width: 528px;
    }
  }
`;

export const Card = styled.div`
  width: 232px;
  height: 116px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0px 20px;
  margin-right: 25px;
  margin-bottom: 15px;

  border-radius: 8px;
  background-color: ${(props) => props.theme.backgroundCinza};


  .priceTitle {
    color: ${(props) => props.theme.cinza};
  }

  h2 {
    font-size: 40px;
    font-weight: 400;
    color: white;
    font-family: "Nunito", "Inter", sans-serif;
    margin: 0px;
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

export const WrapperTitle = styled.div`
  width: 65%;
  min-width:570px ;


  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;