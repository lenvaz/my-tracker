import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import App from "../App";

describe("Render <App/> component successfully", () => {
  it("App counter found & rendered", async () => {
    // Setup the user events
    const user = userEvents.setup();
    // Render the component
    render(<App />);
    // Get the button element
    const button = screen.getByRole<HTMLButtonElement>("button", {
      name: /count is 0/i,
    });
    // click thrice to increment the count to 3
    await user.click(button);
    await user.click(button);
    await user.click(button);
    expect(button.textContent).toBe("count is 3");
  });
  it("App counter not found", async () => {
    // Render the component
    render(<App />);
    // Find the button element and expect an Error due to no match
    expect(
      screen.findByRole<HTMLButtonElement>("button", {
        name: /count is 1/i,
      })
    ).rejects.toThrow();
  });
});
