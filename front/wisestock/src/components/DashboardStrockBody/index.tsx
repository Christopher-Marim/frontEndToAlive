import { useState } from "react";
import { color } from "../../global/styles";
import { useStrock } from "../../hooks/useStrock";
import { ChartStrock, DataChart } from "../ChartStrock";
import { InfosStrock } from "../InfosStrock";
import { InfosStrockSkeleton } from "../InfosStrockSkeleton";
import { Container } from "./styles";

export function DashboardStrockBody() {
  const theme = color;

  const { currentStrock } = useStrock();

  var min = currentStrock.prices
    ?.map((price) => price.closing)
    .reduce(function (a, b) {
      return Math.min(a, b);
    });

  var max = currentStrock.prices
    ?.map((price) => price.closing)
    .reduce(function (a, b) {
      return Math.max(a, b);
    });

  let currentSize = currentStrock.prices?.[0].volume;

  let data = currentStrock.prices?.map((price) => {
    let aux = {
      name: price.pricedAt.slice(5, 7) + "/" + price.pricedAt.slice(-2),
      priceClosing: price.closing,
    };
    return aux;
  });

  return (
    <Container theme={theme}>
        <InfosStrock
          name={currentStrock.name}
          currentPrice={currentStrock.lastPrice}
          highPrice={max ? max : 0}
          lowPrice={min ? min : 0}
          size={currentSize ? currentSize : 0}
        ></InfosStrock>
      <ChartStrock
        strock1={currentStrock.name}
        data={data?.reverse() as DataChart[]}
      ></ChartStrock>
    </Container>
  );
}
