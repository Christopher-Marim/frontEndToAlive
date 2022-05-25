import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { createMock } from "ts-jest-mock";
import { useStrock } from "../../hooks/useStrock";
import { Search } from "../../components/Search";

describe("Search Component", () => {
  /* it("renders correctly", () => {
    render(<Search />);

   expect(screen.getByPlaceholderText('Buscar ação...')).toBeInTheDocument()
  });

  it("load initial data", () => {
    render(<Search />);

    const GetCurrentStrockMock = createMock(useStrock().GetCurrentStrock);

    const returnMock = {
      currentStrock: {
        name: "test",
        lastPrice: 1,
        priceAt: 2,
        prices: [],
      },
      currentStrock2: {
        name: "test2",
        lastPrice: 1,
        priceAt: 2,
        prices: [],
      },
    };

    const buttonMocked = screen.getByTestId('buttonSearch') 
    fireEvent.click(buttonMocked)

   screen.debug()
  }); */
});
