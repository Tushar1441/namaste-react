import { render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

it("Should render header Component with a Cart Link", () => {
  // this header contains redux code
  // so we have to provide it the redux store
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartLink = screen.getByText(/Cart/);
  expect(cartLink).toBeInTheDocument();
});
