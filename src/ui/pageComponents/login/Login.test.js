import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
    it('компонент отображается', () => {
        const { queryByTestId } = render(<Login />);

        expect(queryByTestId('login-container')).toBeTruthy();
    });
});