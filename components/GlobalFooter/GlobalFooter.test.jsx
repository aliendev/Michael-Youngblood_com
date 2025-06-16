import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import GlobalFooter from "./GlobalFooter";

// check that the footer has the copyright date range
describe('renders copyright date range', () => {
  render(<GlobalFooter />);
  const copyrightText = screen.getByText(/Copyright © 1982/i);
  expect(copyrightText).toBeInTheDocument();
});

// check that the footer has the current year
describe('renders current year', () => {
  render(<GlobalFooter />);
  const currentYear = new Date().getFullYear();
  const copyrightText = screen.getByText(new RegExp(currentYear.toString()));
  expect(copyrightText).toBeInTheDocument();
});

// check that the footer matches the snapshot
test('renders GlobalFooter unchanged', () => {
  const { container } = render(<GlobalFooter />);
  expect(container).toMatchSnapshot();
})
