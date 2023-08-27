import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button ui', () => {
  test('Button should display with text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Button should have clear class theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
