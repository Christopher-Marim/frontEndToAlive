import { Header } from "../../components/Header";
import { color } from "../../global/styles";
import { Body, Container } from "./styles";
import Decoration from "../../assets/decoration.svg";
import { HomeBody } from "../../components/HomeBody";
import { DashboardStrockBody } from "../../components/DashboardStrockBody";
import { CompareStrocksBody } from "../../components/CompareStrocksBody";
import { useStrock } from "./../../hooks/useStrock";

function App() {
  const theme = color;

  const { currentStrock, currentStrock2 } = useStrock();
  console.log(currentStrock)

  return (
    <Container theme={theme}>
      <Header visibleSearch={Boolean(currentStrock.name)} />
      <img className="imgDecoration" src={Decoration}></img>
      <Body>
        {!currentStrock.name && <HomeBody></HomeBody>}
        {(currentStrock.name && !currentStrock2.name) && <DashboardStrockBody></DashboardStrockBody>}
        {currentStrock2.name && <CompareStrocksBody></CompareStrocksBody>} 
      </Body>
    </Container>
  );
}

export default App;
