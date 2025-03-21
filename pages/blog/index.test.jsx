import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
//import BlogIndex from './index';

/*TODO #25: Fix blog page test, needs to pull static data maybe? */
test.skip('renders blog index unchanged', () => {
  const { container } = render(<BlogIndex />);
  expect(container).toMatchSnapshot();
});
