import { useState } from "react";
import { color } from "../../global/styles";
import { ChartStrock } from "../ChartStrock";
import { InfosStrock } from "../InfosStrock";
import {
  Container,
} from "./styles";

export function DashboardStrockBody() {
  const theme = color;

  return (
    <Container theme={theme}>
      <InfosStrock></InfosStrock>
      <ChartStrock></ChartStrock>
    </Container>
  );
}
