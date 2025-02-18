import { render, screen } from "@testing-library/react";
import { ContentArea } from "./Content";

describe("Content Component", () => {
  it("displays heading on the screen", () => {
    render(<ContentArea content="" />);
    expect(screen.getByText("Content Area")).toBeInTheDocument();
  });
  it("displays default paragraph if no dynamic paragraph is passed", () => {
    render(<ContentArea content="" />);
    expect(
      screen.getByText("Select a paragraph to read its content.")
    ).toBeInTheDocument();
  });
  it("displays dynamic paragraph on the screen", () => {
    const paragraph = "Sample paragraph";
    render(<ContentArea content={paragraph} />);
    expect(screen.getByText(paragraph)).toBeInTheDocument();
  });
});
