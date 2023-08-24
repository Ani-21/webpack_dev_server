import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button ui', () => {
  test('Button should display with text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
    screen.debug();
  });

  test('Button should have clear class theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
