import { render, screen } from "@testing-library/react";
import Banner from "../LandingPageComponents/Banner";

jest.mock("../../assets/svg/MainImage.tsx", () => () => (
  <span data-testid="svg">Mock of SVG image</span>
));

describe("Testing components from main banner", () => {
  test("render the correct text in h1", () => {
    render(<Banner />);
    expect(
      screen.getByRole("heading", {
        name: `Usuários Garantti`,
      })
    ).toBeInTheDocument();
  });

  test("render the correct text in h4", () => {
    render(<Banner />);
    expect(
      screen.getByText(`Garanttia de segurança para todos os nossos usuários.`)
    ).toBeInTheDocument();
  });

  test("render the correct SVG", () => {
    render(<Banner />);
    expect(screen.getByTestId(`svg`)).toBeInTheDocument();
  });
});

export {};
