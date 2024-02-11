import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import Header from "../Header";
import RestaurantPage from "../RestaurantPage";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

globalThis.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("should smoothly add an item into the cart", () => {
  it("Should load restaurant page component with 12 categories", async () => {
    await act(async () => {
      render(<RestaurantPage />);
    });

    const categoryItems = screen.getAllByTestId("categoryBtn");
    expect(categoryItems.length).toBe(12);
  });

  it("Should contain 20 items in the recommended category component", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <RestaurantPage />
        </Provider>
      );
    });

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);

    const items = screen.getAllByTestId("item-card");
    expect(items.length).toBe(20);
  });

  it("Should add the first item from the recommended category to the cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <RestaurantPage />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);

    const addBtns = screen.getAllByRole("button", { name: "ADD" });
    fireEvent.click(addBtns[0]);

    const itemsAfterAction = screen.getAllByTestId("item-card");
    expect(itemsAfterAction.length).toBe(21);
  });

  it("Should update the cart items from 0 to 1 in the header", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantPage />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const cartItemsCount = screen.getByTestId("cartItemsCount");
    expect(cartItemsCount.innerHTML).toBe("1");
  });

  it("Should clear the cart after clicking the clear cart button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantPage />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);

    const items = screen.getAllByTestId("item-card");
    expect(items.length).toBe(21);

    const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCartBtn);

    const itemsAfterAction = screen.getAllByTestId("item-card");
    expect(itemsAfterAction.length).toBe(20);
  });
});
