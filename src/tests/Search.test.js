import { render, screen, waitFor } from "@testing-library/react";
import "intersection-observer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../redux/store";
import { Search } from "../views";
test("Search page rendering", async () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  await waitFor(() => {
    // jobs init count 12
    const jobCount = screen.getByTestId("data-count").textContent;
    expect(jobCount).toEqual("12");
  });
});
