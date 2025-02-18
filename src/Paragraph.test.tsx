import { render, screen } from "@testing-library/react";
import { ParagraphList } from "./Paragraph";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Paragraph Component", () => {
  it("renders the paragraph title", () => {
    render(<ParagraphList onSelect={() => {}} />);
    expect(screen.getByText("Introduction")).toBeInTheDocument();
  });
  it("calls onSelect when a paragraph title is clicked", async () => {
    const mockOnSelect = jest.fn();
    render(<ParagraphList onSelect={mockOnSelect} />);

    await userEvent.click(screen.getByText("Introduction"));

    expect(mockOnSelect).toHaveBeenCalledWith(
      "This is the introduction paragraph."
    );
  });
});
