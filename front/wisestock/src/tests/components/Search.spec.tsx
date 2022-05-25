import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { createMock } from "ts-jest-mock";
import { useStrock } from "../../hooks/useStrock";
import { Search } from "../../components/Search";
import { StrockProvider } from "../../contexts/state";

const mockGetCurrentStrock = jest.fn();

jest.mock("../../hooks/useStrock", () => {
  return {
    useStrock: () =>
      ({
        GetCurrentStrock: mockGetCurrentStrock,
      } as any),
  };
});

describe("Search Component", () => {
  it("renders correctly", () => {
    render(<Search />);

    expect(
      screen.getByPlaceholderText(/buscar ação\.\.\./i)
    ).toBeInTheDocument();
  });

  it("should be able to type on input", () => {
    const searchbar = render(<Search />);

    const component = searchbar.getByPlaceholderText(/buscar ação\.\.\./i);
    fireEvent.change(component, { target: { value: "foo" } });

    /* @ts-ignore */
    expect(component.value).toBe("foo");
  });

  it("should call custom onChangeInput when typing", () => {
    const onChangeInput = jest.fn();
    const searchbar = render(<Search onChange={onChangeInput} />);

    const input = searchbar.getByPlaceholderText(/buscar ação\.\.\./i);

    fireEvent.change(input, { target: { value: "f" } });
    fireEvent.change(input, { target: { value: "o" } });
    fireEvent.change(input, { target: { value: "x" } });

    expect(onChangeInput).toHaveBeenCalledTimes(3);
  });

  it("button search click", () => {
    render(<Search />, { wrapper: StrockProvider });

    const buttonMocked = screen.getByTestId("buttonSearch");
    fireEvent.click(buttonMocked);

    expect(mockGetCurrentStrock).toBeCalled();
  });
});
