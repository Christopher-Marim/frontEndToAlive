import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { InfosStrock } from "../../components/InfosStrock";

describe("InfosStrock Component", () => {
  it("renders correctly", () => {
    render(
      <InfosStrock
        name="test"
        currentPrice={0}
        highPrice={0}
        lowPrice={0}
        size={10}
      />
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it("renders correctly Modal", () => {
    const { container } = render(
      <InfosStrock
        name="test"
        currentPrice={0}
        highPrice={0}
        lowPrice={0}
        size={10}
      />
    );

    const button = container.getElementsByClassName("buttonSimulation")[0];
    fireEvent.click(button);
    
    expect(screen.getAllByText(/Projeção de ganhos/i)[0]).toBeInTheDocument()
  });

  it("renders correctly skeleton", () => {
    const { container } = render(
      <InfosStrock
        name="test"
        currentPrice={0}
        highPrice={0}
        lowPrice={0}
        size={0}
      />
    );

    expect(
      container.getElementsByClassName("react-loading-skeleton")[0]
    ).toHaveAttribute("class", "react-loading-skeleton");
  });
});
