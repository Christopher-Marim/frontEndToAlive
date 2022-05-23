import { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { color } from "../../global/styles";
import { InfosStrockSkeleton } from "../InfosStrockSkeleton";
import { Modal } from "../Modal";
import { Card, CardsWrapper, Container, WrapperTitle } from "./styles";

interface StrockInfos {
  name: string;
  currentPrice: number;
  lowPrice: number;
  highPrice: number;
  size: number;
}

export function InfosStrock({
  name,
  currentPrice,
  lowPrice,
  highPrice,
  size,
}: StrockInfos) {
  const [visibleModal, setVisibleModal] = useState(false);

  const theme = color;

  return (
    <Container theme={theme}>
      {visibleModal && (
        <Modal strockName={name} onClose={() => setVisibleModal(false)}></Modal>
      )}
      {size ? (
        <>
          <WrapperTitle>
            <h1>{name}</h1>
            <button
              type="button"
              className="buttonSimulation"
              onClick={() => {
                setVisibleModal(true);
              }}
            >
              Iniciar Simulação
            </button>
          </WrapperTitle>
          <CardsWrapper theme={theme}>
            <Card theme={theme} className="cardPrincipal">
              <p className="priceTitle">Preço Atual</p>
              <h2>
                {currentPrice}
                {/* <FiArrowUp
                  size={25}
                  color={"white"}
                  style={{ marginLeft: 50 }}
                ></FiArrowUp> */}
              </h2>
            </Card>
            <Card theme={theme}>
              <p className="priceTitle">Menor valor esse mês</p>
              <h2>{lowPrice}</h2>
            </Card>
            <Card theme={theme}>
              <p className="priceTitle">Maior valor esse mês</p>
              <h2>{highPrice}</h2>
            </Card>
            <Card theme={theme} style={{ marginRight: 0 }} className={'cardVolume'}>
              <p className="priceTitle">Volume atual</p>
              <h2>{size}</h2>
            </Card>
          </CardsWrapper>
        </>
      ) : (
        <InfosStrockSkeleton></InfosStrockSkeleton>
      )}
    </Container>
  );
}
