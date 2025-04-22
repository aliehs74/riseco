import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CustomButton from '..';

describe('CustomButton', () => {
    beforeEach(() => {
      jest.clearAllMocks();      
    })
    it('renders correctly', () => {
      render(<CustomButton title="Click me" />);
      const button = screen.getByText('Click me');
      expect(button).toBeTruthy();
    });
  
    it('ckeck exact variant', () => {
      render(<CustomButton title="Submit" variant="secondary" />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn btn-secondary');
    });
  
    it('check additional className', () => {
      render(<CustomButton title="Test" className="extra-class" />);
      const button = screen.getByText('Test');
      expect(button).toHaveClass('extra-class');
    });
  
    it('check size', () => {
      render(<CustomButton title="Test" size="lg" />);
      const button = screen.getByText('Test');
      expect(button).toHaveClass('btn-lg');
    });
  
    it('find element by testid', () => {
      render(<CustomButton title="Test" data-testid="custom-button" />);
      const button = screen.getByTestId('custom-button');
      expect(button).toBeInTheDocument();
    });
  });