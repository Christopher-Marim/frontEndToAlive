import styled from "styled-components";
import { color } from "./../../global/styles";

export const Container = styled.main`
  display: flex;
  flex:1;
  flex-direction:column ;
  min-height:100vh ;
  max-width:100vw;
  background-color: ${(props) => props.theme.background};
  position: relative;
  z-index:1 ;

  .imgDecoration{
    position: absolute;
    right: 0;
    top:30vh;
    width:400px;
    z-index:-5 ;

    @media screen and (max-width: 1150px) {
      top:80%;
      bottom:0 ;
      filter:opacity(0.1)  ;
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
