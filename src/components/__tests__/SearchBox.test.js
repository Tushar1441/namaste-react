import {
  fireEvent,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("", () => {
  it("Should render the Body component with a search inputbox", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchInputBox = screen.getByTestId("searchInputBox");
    const searchBtn = screen.getByTestId("searchBtn");

    expect(searchInputBox).toBeInTheDocument();
  });

  it("Should render 9 restaurants cards in the body component initially", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
  });

  it("Should search and render 2 res-cards for pizza text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchInputBox = screen.getByTestId("searchInputBox");
    const searchBtn = screen.getByTestId("searchBtn");

    fireEvent.change(searchInputBox, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);
  });

  it("should filter top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedFilterBtn = screen.getByTestId("topRatedFilterBtn");
    fireEvent.click(topRatedFilterBtn);

    const cardsAftefFilter = screen.getAllByTestId("resCard");
    expect(cardsAftefFilter.length).toBe(4);
  });

});
