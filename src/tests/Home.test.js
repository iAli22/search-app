import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../redux/store";
import { Home } from "../views";
import "intersection-observer";

test("Home page rendering", async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  // SearchInput render
  const searchElement = screen.queryByTestId("search-input");
  expect(searchElement).toBeInTheDocument();

  // SearchInput on change set data current
  fireEvent.change(searchElement, { target: { value: "frontend" } });
  expect(searchElement.value).toBe("frontend");

  await waitFor(() => {
    // autocomplete list will be visible
    const dropdownList = screen.getByTestId("dropdown-list");
    expect(dropdownList).toBeInTheDocument();
  });
  await waitFor(() => {
    //  list contain link be visible
    const dropdownItem = screen.getAllByText("Frontend Developer")[0];
    expect(dropdownItem.href).toBe("http://localhost/jobs/search");
  });
});
