import styled from "styled-components";
import { color } from "./../../global/styles";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(0, 0, 0, 0.4);

  z-index: 10;
`;

export const Wrapper = styled.div`
  height: auto;
  width:auto;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;

  background-color: #161616;

  border-style: solid;
  border-color: #ffffff;
  border-radius: 16px;
  border-width: 2px;

  padding: 10px 40px;

     @media screen and (max-width: 1400px){
        min-height:450px ;

  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    max-width:70%;

    font-size: 18;
    color: ${(props) => props.theme.cinza};
  }
  strong {
    color: ${(props) => props.theme.verdeClaro};
  }

  .group {
    width: 70%;

  }

  .groupTexts{
    width:100% ;
    display:flex;
    flex-direction: column ;
    align-items: center ;
    justify-content:center;
    text-align:center ;

  }

  .groupInputs {
    width: 100%;
    margin-top: 20px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
