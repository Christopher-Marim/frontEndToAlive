import styled from "styled-components";

export const Container = styled.input`
    height: 50px ;
    padding:0px 15px;

    display: flex;
    align-items: center;

    background-color: rgb(255,255,255,0.04);
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

`;

