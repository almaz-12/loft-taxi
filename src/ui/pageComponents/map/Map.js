import './Map.css';
import React from "react";
import mapboxgl from "mapbox-gl";

class Map extends React.Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiYWxtYXpydTA5IiwiYSI6ImNrb2ZrNmFsdDBtdHEzMXRyNTVrdG52MG8ifQ.uwgDd-bKvX4bPupN9B2GZg";
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [49.10672837236559, 55.792001030419364], 
            zoom: 12,
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() { 
        return (
            <div className="map-wrapper">
                <div data-testid="map" className="map" ref={this.mapContainer}></div>
            </div>
        );
    }
};

export default Map;