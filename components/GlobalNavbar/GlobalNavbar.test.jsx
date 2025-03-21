import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import GlobalNavbar from "./GlobalNavbar";

it('renders GlobalNavbar unchanged', () => {
  const { container } = render(<GlobalNavbar />);
  expect(container).toMatchSnapshot();
})
