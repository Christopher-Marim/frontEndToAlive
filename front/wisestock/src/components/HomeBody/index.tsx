import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { color } from "../../global/styles";
import { Button } from "../Button";
import { Input } from "../Input";
import { Search } from "../Search";
import {
  Card,
  CardsWrapper,
  Container,
  HistoryWrapper,
  Wrapper,
} from "./styles";

export function HomeBody() {
  const [compareVisible, setCompareVisible] = useState<boolean>(false);
  const theme = color;

  const handleClickButtonCompare = () => {
    setCompareVisible(!compareVisible);
  };

  return (
    <Container theme={theme}>
      {!compareVisible && (
        <Wrapper theme={theme}>
          <span></span>
          <h1>Olá, qual ação deseja buscar?</h1>
          <h3>Trazer dashboard da ação</h3>
          <Search style={{ width: 400, height: 50 }}></Search>
          <button
            type="button"
            className="buttonCompare"
            onClick={handleClickButtonCompare}
          >
            Comparar
          </button>
        </Wrapper>
      )}
      {compareVisible && (
        <Wrapper theme={theme}>
          <span></span>
          <h1>Comparar Ações</h1>
          <h3>Trazer comparativo de duas ações</h3>
          <div className="groupInputs">
            <Input placeholder="Primeira Ação"></Input>
            <h1>x</h1>
            <Input placeholder="Segunda Ação"></Input>
          </div>
          <Button style={{ width: 516, marginTop: 20 }}>Comparar</Button>
          <button
            type="button"
            className="buttonCompare"
            onClick={handleClickButtonCompare}
          >
            Buscar ação
          </button>
        </Wrapper>
      )}

      <HistoryWrapper>
        <h2>Mais Procurados</h2>
        <CardsWrapper theme={theme}>
          <Card theme={theme}>
            <div className="headerCard">
              <p className="strockDate">21 Maio 2022</p>
              <p className="strockValue">R$1.05</p>
            </div>
            <div className="bodyCard">
              <h3 className="strockName">Any</h3>
              <BsArrowRight
                color={"white"}
                size={26}
                style={{ marginTop: 40 }}
              ></BsArrowRight>
            </div>
          </Card>
          <Card theme={theme} className="cardPrincipal">
            <div className="headerCard">
              <p className="strockDate">21 Maio 2022</p>
              <p className="strockValue">R$1.05</p>
            </div>
            <div className="bodyCard">
              <h3 className="strockName">Any</h3>
              <BsArrowRight
                color={"white"}
                size={26}
                style={{ marginTop: 40 }}
              ></BsArrowRight>
            </div>
          </Card>
          <Card theme={theme}>
            <div className="headerCard">
              <p className="strockDate">21 Maio 2022</p>
              <p className="strockValue">R$1.05</p>
            </div>
            <div className="bodyCard">
              <h3 className="strockName">Any</h3>
              <BsArrowRight
                color={"white"}
                size={26}
                style={{ marginTop: 40 }}
              ></BsArrowRight>
            </div>
          </Card>
        </CardsWrapper>
      </HistoryWrapper>
    </Container>
  );
}
