import React from 'react';
import { render } from '@testing-library/react';
import Register from './Register';

describe('Register', () => {
    it('компонент отображается', () => {
        const { queryByTestId } = render(<Register />);

        expect(queryByTestId('register-container')).toBeTruthy();
    });
});