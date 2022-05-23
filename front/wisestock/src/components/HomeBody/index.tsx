import { ChangeEvent, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { color } from "../../global/styles";
import { useStrock } from "../../hooks/useStrock";
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
  const [strock1, setStrock1] = useState("");
  const [strock2, setStrock2] = useState("");
  const theme = color;

  const { CompareStrocks } = useStrock();

  const handleClickButtonChangeToCompare = () => {
    setCompareVisible(!compareVisible);
  };

  const handleClickButtonCompare = () => {
    CompareStrocks(strock1, strock2);
  };

  const onChangeInputStrock1 = (e: ChangeEvent<HTMLInputElement>) => {
    setStrock1(e.target.value);
  };
  const onChangeInputStrock2 = (e: ChangeEvent<HTMLInputElement>) => {
    setStrock2(e.target.value);
  };

  return (
    <Container theme={theme}>
      {!compareVisible && (
        <Wrapper theme={theme}>
          <span></span>
          <h1>
            Olá,
            <br /> qual ação deseja buscar?
          </h1>
          <h3>Trazer dashboard da ação</h3>
          {window.innerWidth < 1165 ? (
            <Search style={{ width: '100%', height: 35 }}></Search>
          ) : (
            <Search style={{ width: 400, height: 50 }}></Search>
          )}
          <button
            type="button"
            className="buttonCompare"
            onClick={handleClickButtonChangeToCompare}
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
            <Input
              placeholder="Primeira Ação"
              value={strock1}
              onChange={onChangeInputStrock1}
            ></Input>
            <h1>x</h1>
            <Input
              placeholder="Segunda Ação"
              value={strock2}
              onChange={onChangeInputStrock2}
            ></Input>
          </div>
          <Button
            style={{ width: 516, marginTop: 20 }}
            onClick={handleClickButtonCompare}
          >
            Comparar
          </Button>
          <button
            type="button"
            className="buttonCompare"
            onClick={handleClickButtonChangeToCompare}
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
