import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import './geocoder.css';

function Geocoder() {
    const ctrl = new MapboxGeocoder({
        accessToken: process.env.REACT_APP_MAPBOX,
        marker: false,
        collapsed: true,
    });
    useControl(() => ctrl)
    ctrl.on('result', (e) => {
        const coords = e.result.geometry.coordinates;
    })
    return null;
}


export default Geocoder;