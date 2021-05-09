import './Map.css';
import React from "react";
import mapboxgl from "mapbox-gl";
import AuthConsumerWrap from '../../../AuthConsumer';

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
        if(this.props.isLoggedIn) {
            this.props.navigateTo("login")
            return null;
        }
        return (
            <div className="map-wrapper">
                <div className="map" ref={this.mapContainer}></div>
            </div>
        );
    }
};

export default AuthConsumerWrap(Map);