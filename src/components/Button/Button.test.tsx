// src/components/Button.test.tsx
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('renders button text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  // onClick, disabled 등은 의도적으로 테스트 안 함
  // → 커버리지 부분적으로만 나오게
});
