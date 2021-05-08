import './Map.css';
import React from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";

class Map extends React.Component {
    mapContainer = React.createRef();

    static propTypes = {
        isLoggedIn: PropTypes.bool,
        navigateTo: PropTypes.func
    }

    componentDidMount() {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiYWxtYXpydTA5IiwiYSI6ImNrb2ZrNmFsdDBtdHEzMXRyNTVrdG52MG8ifQ.uwgDd-bKvX4bPupN9B2GZg";
        new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [49.10672837236559, 55.792001030419364], 
            zoom: 12,
        });
    }

    render() {
        const {isLoggedIn, navigateTo} = this.props;
        if(isLoggedIn) {
            navigateTo('login');
            return null;
        }
        return (
            <div className="map-wrapper">
                <div className="map" ref={this.mapContainer}></div>
            </div>
        );
    }
};

export default Map;