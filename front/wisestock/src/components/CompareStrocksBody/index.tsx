import { useState } from "react";
import { color } from "../../global/styles";
import { useStrock } from "../../hooks/useStrock";
import { ChartStrock, DataChart } from "../ChartStrock";
import { InfosStrock } from "../InfosStrock";
import {
  Container, Wrapper,
} from "./styles";

export function CompareStrocksBody() {
  const theme = color;

  const { currentStrock } = useStrock();


  return (
    <Container theme={theme}>
      <Wrapper>
      <InfosStrock
      name={currentStrock.name}
      currentPrice={currentStrock.lastPrice}
      highPrice={1}
      lowPrice={1}
      size={1}
      ></InfosStrock>
      <h1>X</h1>
      <InfosStrock
      name={currentStrock.name}
      currentPrice={currentStrock.lastPrice}
      highPrice={1}
      lowPrice={1}
      size={10}
      ></InfosStrock>
      <ChartStrock data={[] as DataChart[]}></ChartStrock>
      </Wrapper>
      
    </Container>
  );
}
