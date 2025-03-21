import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import BlogArticle from './[slug]';

/*TODO #24: Fix blog article page test, needs to pull static data maybe? */
test.skip('renders blog index unchanged', () => {
  const { container } = render(<BlogArticle />);
  expect(container).toMatchSnapshot();
});
