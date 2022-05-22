import styled from "styled-components";
import { color } from "./../../global/styles";

export const Container = styled.header`
  display: flex;
  flex:1;
  height:100vh ;
  flex-direction:column ;
  max-width:100vw;
  background: ${(props) => props.theme.background};

  .imgDecoration{
    position: absolute;
    right: 0;
    top:25vh;
    width:400px;

    @media screen and (max-width: 1150px) {
      top:80vh;
      bottom:0 ;
      filter:brightness(0.3) ;
    }
  }
`;


export const Body = styled.main`
  flex:12;
  margin:10px 400px 40px 150px;
`;
