import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Help from "../Help";

describe("Contact Us Page Test Cases", () => {
  test("Should load contact us component", () => {
    render(<Help />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact Us component", () => {
    render(<Help />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load button inside Contact Us component", () => {
    render(<Help />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load button inside Contact Us component", () => {
    render(<Help />);

    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load three input boxes", () => {
    render(<Help />);

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);
    expect(inputBoxes.length).toBe(3);
  });

  test("Should load three input boxes", () => {
    render(<Help />);

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);
    expect(inputBoxes.length).not.toBe(2);
  });
});
