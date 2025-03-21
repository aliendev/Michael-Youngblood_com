import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import GlobalFooter from "./GlobalFooter";

describe('renders copyright date range', () => {
  render(<GlobalFooter />);
  const copyrightText = screen.getByText(/Copyright © 1982/i);
  expect(copyrightText).toBeInTheDocument();
});

test('renders GlobalFooter unchanged', () => {
  const { container } = render(<GlobalFooter />);
  expect(container).toMatchSnapshot();
})
