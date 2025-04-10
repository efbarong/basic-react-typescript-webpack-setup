import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button';

describe('<Button />', () => {
  test('Renderiza el botón con la etiqueta correcta', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('Aplica la clase correspondiente al tema', () => {
    render(<Button label="Primary" theme="primary" />);
    expect(screen.getByText('Primary')).toHaveClass('btn-primary');

    render(<Button label="Secondary" theme="secondary" />);
    expect(screen.getByText('Secondary')).toHaveClass('btn-secondary');

    render(<Button label="Tertiary" theme="tertiary" />);
    expect(screen.getByText('Tertiary')).toHaveClass('btn-tertiary');
  });

  test('Aplica la clase correspondiente al tamaño', () => {
    render(<Button label="Small" size="sm" />);
    expect(screen.getByText('Small')).toHaveClass('btn-sm');

    render(<Button label="Large" size="lg" />);
    expect(screen.getByText('Large')).toHaveClass('btn-lg');
  });

  test('Combina las clases externas proporcionadas en className', () => {
    render(<Button label="Custom Class" className="custom-class" />);
    expect(screen.getByText('Custom Class')).toHaveClass('custom-class');
  });

  test('Propaga propiedades adicionales al botón', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} data-testid="custom-button" />);
    const button = screen.getByTestId('custom-button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('No responde al clic cuando está deshabilitado', () => {
    const handleClick = jest.fn();
    render(<Button label="Disabled" onClick={handleClick} disabled />);
    const button = screen.getByText('Disabled');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
