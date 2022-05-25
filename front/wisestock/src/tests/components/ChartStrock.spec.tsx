import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ChartStrock, DataChart } from "../../components/ChartStrock";

describe("Chart Component", () => {
  it("renders correctly chart", () => {
    const { container } = render(
      <ChartStrock
        data={[{ name: "01/12", priceClosing: 12 }]}
        strock1="test"
      />
    );

    expect(
      container.getElementsByClassName("recharts-responsive-container").length
    ).toBe(1);
  });

  it("renders correctly chart skeleton", () => {
    const { container } = render(
      <ChartStrock data={[]} strock1="test" />
    );

    expect(
      container.getElementsByClassName("react-loading-skeleton")[0]
    ).toHaveAttribute("class", "react-loading-skeleton");
  });
});
