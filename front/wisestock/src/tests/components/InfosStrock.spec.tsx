import { render, screen } from "@testing-library/react";
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

    expect(screen.getByText("test")).toBeInTheDocument();
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
