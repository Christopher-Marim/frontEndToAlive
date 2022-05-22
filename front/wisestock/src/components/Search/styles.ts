import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;

  input:focus-within {
    outline: none;
    border-color: ${(props) => props.theme.verdeClaro};
  }
  input {
    width: 400px;
    height: 40px;
    padding: 0px 15px;

    display: flex;
    align-items: center;

    background-color: rgb(255, 255, 255, 0.04);
    color: ${(props) => props.theme.cinza};

    border-radius: 8px;
    border-color: "#555555";
    border-style: solid;
    border-width: 1px;
    border-right-width: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    font-size: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 104%;
    color: white;
    background-color: ${(props) => props.theme.verdeClaro};

    border-radius: 8px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-style: solid;
    border-color: "#555555";
    border-width: 1px;
    border-left-width: 0px;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;
