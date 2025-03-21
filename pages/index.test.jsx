import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Homepage from './index';


test('renders homepage unchanged', () => {
  const { container } = render(<Homepage />);
  expect(container).toMatchSnapshot();
});
