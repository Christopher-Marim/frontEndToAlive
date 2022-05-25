import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { createMock } from "ts-jest-mock";
import { CompareStrocksBody } from "../../components/CompareStrocksBody";
import { useStrock } from "../../hooks/useStrock";
import { StrockProvider } from "../../contexts/state";

describe("CompareStrocks Component", () => {
  it("renders correctly", () => {
   render(<CompareStrocksBody />, {wrapper:StrockProvider});

    const useStrockMocked = createMock(useStrock);

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

    /* useStrockMocked.mockReturnValueOnce(returnMock as any);

   screen.debug() */

   expect(screen.getByText('X')).toBeInTheDocument()
  });
});
