import React from "react";
import Map from "./Map";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({}),
  }));


describe('Map', () => {
    it('компонент отрендерился', () => {
        const map = render(<Map />);

        expect(map).toBeTruthy();
    });
});