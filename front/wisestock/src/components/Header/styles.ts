import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px 0px;
  background-color: ${(props) => props.theme.background};

  img {
    width: 100px;
    height: 100px;
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0px 150px;
  }

  .buttonAbout {
    height: 42px;

    align-items: center;
    display: flex;

    color: white;
    background-color: transparent;

    border-color: "white";
    border-width: 2px;
    border-style: solid;
    border-radius: 8px;

    padding: 10px 27px;

    font-size: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  .buttonMenu {
    display: flex;
    align-items: "center";
    justify-content: "center";

    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 150px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    margin-right: -10px;
  }
`;
