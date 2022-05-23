import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CardsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  /*   @media screen and (max-width: 1400px){
  } */
`;

export const Card = styled.div`
  min-width: 200px;
  max-width: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 25px;
  margin-bottom: 15px;

  border-radius: 8px;

  background: linear-gradient(
    to left bottom,
    ${(props) => props.theme.verdeClaro},
    ${(props) => props.theme.ciano}
  );

  .priceTitle {
    color: ${(props) => props.theme.cinza};
  }

  h2 {
    font-size: 2vw;
    font-weight: 400;
    color: white;
    font-family: "Nunito", "Inter", sans-serif;
    margin: 0px;
  }
`;
