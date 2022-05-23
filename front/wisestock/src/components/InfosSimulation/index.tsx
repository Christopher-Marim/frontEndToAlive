import { color } from "../../global/styles";
import { InfosSimulationSkeleton } from "../InfosSimulationSkeleton";
import { InfosStrockSkeleton } from "../InfosStrockSkeleton";
import { Card, CardsWrapper, Container } from "./styles";

interface StrockInfos {
  quantidade: number;
  currentPrice: number;
  priceDateChoiced: number;
  dateChoiced:string;
  capitalGains: number;
}

export function InfosSimulation({
  quantidade,
  currentPrice,
  priceDateChoiced,
  dateChoiced,
  capitalGains,
}: StrockInfos) {
  const theme = color;

  return (
    <Container theme={theme}>
      {currentPrice ? (
        <>
          <CardsWrapper theme={theme}>
            <Card theme={theme}>
              <p className="priceTitle">Quantidade</p>
              <h2>
                {quantidade}
              </h2>
            </Card>
            <Card theme={theme}>
              <p className="priceTitle">Hoje</p>
              <h2>R${currentPrice}</h2>
            </Card>
            <Card theme={theme}>
              <p className="priceTitle">{dateChoiced}</p>
              <h2>R${priceDateChoiced}</h2>
            </Card>
            <Card theme={theme} style={{ marginRight: 0 }}>
              <p className="priceTitle">Ganho de Capital R$</p>
              <h2>{Math.round(capitalGains)}</h2>
            </Card>
          </CardsWrapper>
        </>
      ) : (
        <InfosSimulationSkeleton></InfosSimulationSkeleton>
      )}
    </Container>
  );
}
