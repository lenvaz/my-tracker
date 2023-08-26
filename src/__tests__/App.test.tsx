import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("Render <App/> component successfully", () => {
    render(<App />);
    expect(1 + 1).toBe(2);
  });
});
