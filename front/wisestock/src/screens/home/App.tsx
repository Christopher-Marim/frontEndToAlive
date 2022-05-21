import { Header } from "../../components/Header";
import { color } from "../../global/styles";
import { Body, Container } from "./styles";
import Decoration from '../../assets/decoration.svg'
import { HomeBody } from "../../components/HomeBody";

function App() {
  const theme = color;
  return (
    <Container theme={theme}>
      <Header visibleSearch={false}/>
      <img className="imgDecoration" src={Decoration}></img>

      <Body>
      <HomeBody></HomeBody>
      </Body>
    </Container>
  );
}

export default App;
