import { render, screen, waitFor } from "@testing-library/react";
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

  await waitFor(() => {
    // jobs init count 12
    const jobCount = screen.getByTestId("data-count").textContent;
    expect(jobCount).toEqual("12");
  });
});
