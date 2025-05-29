import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /hello world!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('has correct styling classes', () => {
    const { container } = render(<Home />);
    const main = container.querySelector('main');

    expect(main).toHaveClass(
      'min-h-screen',
      'flex',
      'items-center',
      'justify-center',
      'bg-gray-100'
    );
  });

  it('renders heading with correct text content', () => {
    render(<Home />);

    const heading = screen.getByText('Hello World!');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});
