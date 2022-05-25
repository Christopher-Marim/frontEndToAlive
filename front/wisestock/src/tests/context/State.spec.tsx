import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { StrockContext, StrockProvider } from "../../contexts/state";
import { HomeBody } from "../../components/HomeBody";
import { useStrock } from "./../../hooks/useStrock";
import { useEffect } from "react";

interface props {
  name: string;
  qtd?: number;
  date?: string;
}

const TestComponent = ({ name, qtd, date }: props) => {
  const { GetCurrentStrock, GetSimulationStrock } = useStrock();
  return (
    <div>
      <button
        onClick={() => GetCurrentStrock(name)}
        data-testid="testeButtonStrock"
      ></button>
      {qtd && date && (
        <button
          onClick={() => GetSimulationStrock(name, qtd, date)}
          data-testid="testeButtonSimulationStrock"
        ></button>
      )}
    </div>
  );
};

describe("State Strock Context", () => {
  it("get informations strock correctly ", async () => {
    const GetCurrentStrock = jest.fn();
    const { getByTestId } = render(
      <StrockContext.Provider
        value={
          {
            GetCurrentStrock,
          } as any
        }
      >
        <TestComponent name="any"></TestComponent>
      </StrockContext.Provider>
    );

    const submitButton = getByTestId("testeButtonStrock");

    fireEvent.click(submitButton);
    expect(GetCurrentStrock).toHaveBeenCalledTimes(1);
  });
  it("get Simulation strock correctly ", async () => {
    const GetSimulationStrock = jest.fn();
    const { getByTestId } = render(
      <StrockContext.Provider
        value={
          {
            GetSimulationStrock,
          } as any
        }
      >
        <TestComponent name="any" qtd={1} date={'2022-01-01'}></TestComponent>
      </StrockContext.Provider>
    );

    const submitButton = getByTestId("testeButtonSimulationStrock");

    fireEvent.click(submitButton);
    expect(GetSimulationStrock).toHaveBeenCalledTimes(1);
  });
});
