import React from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";

class Map extends React.Component {
    map = null;

    static propTypes = {
        isLoggedIn: PropTypes.bool,
        navigateTo: PropTypes.func
    }

    componentDidMount() {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiYWxtYXpydTA5IiwiYSI6ImNrb2ZrNmFsdDBtdHEzMXRyNTVrdG52MG8ifQ.uwgDd-bKvX4bPupN9B2GZg";
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.3056504, 59.9429126], // LED
            zoom: 10,
        });
    }
    
    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const {isLoggedIn, navigateTo} = this.props;
        if(isLoggedIn) {
            navigateTo('login');
            return null;
        }
        return <h1>Map</h1>;
    }
};

export default Map;