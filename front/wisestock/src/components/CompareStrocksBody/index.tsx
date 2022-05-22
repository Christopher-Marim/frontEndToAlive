import { useState } from "react";
import { color } from "../../global/styles";
import { ChartStrock } from "../ChartStrock";
import { InfosStrock } from "../InfosStrock";
import {
  Container, Wrapper,
} from "./styles";

export function CompareStrocksBody() {
  const theme = color;

  return (
    <Container theme={theme}>
      <Wrapper>
      <InfosStrock></InfosStrock>
      <h1>X</h1>
      <InfosStrock></InfosStrock>
      <ChartStrock></ChartStrock>
      </Wrapper>
      
    </Container>
  );
}
