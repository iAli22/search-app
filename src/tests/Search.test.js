import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../redux/store";
import { Search } from "../views";

test("Search page rendering", () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  // SearchInput
  const searchElement = screen.queryByTestId("search-input");
  expect(searchElement).toBeInTheDocument();
});
