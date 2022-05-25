import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CompareStrocksBody } from "../../components/CompareStrocksBody";
import { StrockProvider } from "../../contexts/state";
import { Prices, Strock } from "../../contexts/types";
import { createMock } from "ts-jest-mock";
import { useStrock } from "./../../hooks/useStrock";
import { DataChart } from "../../components/ChartStrock";

const strock: Strock = {
  name: "test",
  lastPrice: 1,
  priceAt: "2022-01-01",
  prices: [
    {
      closing: 1,
      high: 1,
      low: 1,
      opening: 1,
      volume: 1,
      pricedAt: "2022-01-01",
    },
    {
      closing: 2,
      high: 2,
      low: 2,
      opening: 2,
      volume: 2,
      pricedAt: "2022-02-02",
    },
  ],
};

jest.mock("../../hooks/useStrock", () => {
  return {
    useStrock: () =>
      ({
        currentStrock: strock,
        currentStrock2: strock,
      } as any),
  };
});

describe("CompareStrocks Component", () => {
  it("renders correctly", () => {
    render(<CompareStrocksBody />, { wrapper: StrockProvider });

    expect(screen.getByText(/X/i)).toBeInTheDocument();
  });

  it("get informations strock correctly ", () => {
    render(<CompareStrocksBody />, { wrapper: StrockProvider });

    expect(screen.getAllByText('2')[0]).toBeInTheDocument();
  });
});
