import styled from "styled-components";

export const Container = styled.input`
    height: 50px ;
    padding:0px 15px;
    min-width:80px ;

    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.backgroundCinza};
    color: ${(props) => props.theme.cinza};

    border-radius: 8px;
    border-color: "#555555";
    border-style: solid;
    border-width: 1px;

    font-size: 1rem;

    &:focus {
    outline: none;
    border-color: ${(props) => props.theme.verdeClaro};
    border-width: 1.5px;

  }

  @media screen and (max-width: 1150px) {
      width:100% ;
      padding:0px 0px ;
      padding-inline:10px ;
    }

`;

