import React from "react";
import Logo from "./Logo";
import { render } from "@testing-library/react";


describe('Logo', () => {
    it('компонент отрендерился', () => {
        const map = render(<Logo />);
        expect(map).toBeTruthy();
    });
});