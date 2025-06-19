import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import GlobalFooter from "./GlobalFooter";

// check that the footer has the copyright date range
describe('renders copyright date range', () => {
  render(<GlobalFooter />);
  const copyrightText = screen.getByText((content) => content.includes(`Copyright © 1982`) && content.includes(new Date().getFullYear().toString()));
  expect(copyrightText).toBeInTheDocument();
});

// check that the footer matches the snapshot
test('renders GlobalFooter unchanged', () => {
  const { container } = render(<GlobalFooter />);
  expect(container).toMatchSnapshot();
})




 



