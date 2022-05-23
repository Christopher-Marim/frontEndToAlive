import styled from "styled-components";
import { color } from "./../../global/styles";

export const Container = styled.main`
  display: flex;
  flex:1;
  flex-direction:column ;
  min-height:100vh ;
  max-width:100vw;
  background-color: ${(props) => props.theme.background};

  .imgDecoration{
    position: absolute;
    right: 0;
    top:25vh;
    width:400px;

    @media screen and (max-width: 1150px) {
      top:80vh;
      bottom:0 ;
      filter:opacity(0.2)  ;
    }
  }
`;


export const Body = styled.main`
  flex:12;
  margin:10px 550px 40px 150px;

  @media screen and (max-width: 1150px) {
    margin:10px 30px 40px 30px;
    }
`;
