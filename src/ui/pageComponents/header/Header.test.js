import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it('компонент отображается', () => {
        const { queryByTestId } = render(<Header />);

        expect(queryByTestId('main-header')).toBeTruthy();
    });
});