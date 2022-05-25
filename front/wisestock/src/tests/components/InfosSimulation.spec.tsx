import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { InfosSimulation } from "../../components/InfosSimulation";

describe("InfosSimulation Component", () => {
  it("renders correctly", () => {
    render(
      <InfosSimulation
        capitalGains={0}
        currentPrice={1}
        dateChoiced={"2022-01-01"}
        priceDateChoiced={0}
        quantidade={2}
      />
    );

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("renders correctly skeleton", () => {
    const { container } = render(
      <InfosSimulation
        capitalGains={0}
        currentPrice={0}
        dateChoiced={"2022-01-01"}
        priceDateChoiced={0}
        quantidade={2}
      />
    );

    expect(
      container.getElementsByClassName("react-loading-skeleton")[0]
    ).toHaveAttribute("class", "react-loading-skeleton");
  });
});
