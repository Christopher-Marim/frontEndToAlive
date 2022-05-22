import { Header } from "../../components/Header";
import { color } from "../../global/styles";
import { Body, Container } from "./styles";
import Decoration from '../../assets/decoration.svg'
import { HomeBody } from "../../components/HomeBody";
import { DashboardStrockBody } from "../../components/DashboardStrockBody";
import { CompareStrocksBody } from "../../components/CompareStrocksBody";

function App() {
  const theme = color;
  return (
    <Container theme={theme}>
      <Header visibleSearch={false}/>
      <img className="imgDecoration" src={Decoration}></img>
      <Body>
      <HomeBody></HomeBody>
      <DashboardStrockBody></DashboardStrockBody>
      <CompareStrocksBody></CompareStrocksBody>
      </Body>
    </Container>
  );
}

export default App;
