import React from 'react';
import { render } from '@testing-library/react';
import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
    test('renders PasswordInput component', () => {
      render(<PasswordInput />);
    });
});