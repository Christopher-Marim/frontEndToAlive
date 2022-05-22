import { FiArrowUp } from "react-icons/fi";
import { color } from "../../global/styles";
import { Card, CardsWrapper, Container, WrapperTitle } from "./styles";

export function InfosStrock() {
  const theme = color;

  return (
    <Container theme={theme}>
        <WrapperTitle>
        <h1>Apple</h1>
        <button className="buttonSimulation">Iniciar Simulação</button>
        </WrapperTitle>
      <CardsWrapper theme={theme}>
        <Card theme={theme} className="cardPrincipal">
            <p className="priceTitle">Preço Atual</p>
            <h2>R$1.05 <FiArrowUp size={25} color={'white'} style={{marginLeft:50}}></FiArrowUp></h2>
            
        </Card>
        <Card theme={theme}>
        <p className="priceTitle">Menor valor esse mês</p>
            <h2>R$1.05</h2>
        </Card>
        <Card theme={theme}>
        <p className="priceTitle">Maior valor esse mês</p>
            <h2>R$1.05</h2>
        </Card>
      </CardsWrapper>
    </Container>
  );
}
