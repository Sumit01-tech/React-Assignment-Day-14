import React, { useState, useEffect, useCallback, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { Input, Button, VStack, Box } from "@chakra-ui/react";

const MapComponent = () => {
    const [position, setPosition] = useState([51.505, -0.09]);
    const [destination, setDestination] = useState("");
    const [route, setRoute] = useState(null);
    const [geoAlert, setGeoAlert] = useState(false);

    useEffect(() => {
        navigator.geolocation.watchPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
            },
            (err) => console.error(err),
            { enableHighAccuracy: true }
        );
    }, []);

    const handleSearch = useCallback(async () => {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`
        );
        const data = await response.json();
        if (data.length > 0) {
            setPosition([data[0].lat, data[0].lon]);
        }
    }, [destination]);

    const planRoute = useCallback(() => {
        setRoute({ start: position, end: position });
    }, [position]);

    useEffect(() => {
        if (L.latLng(position).distanceTo(L.latLng(51.505, -0.09)) < 500) {
            setGeoAlert(true);
        } else {
            setGeoAlert(false);
        }
    }, [position]);

    return (
        <Box p={4}>
            {geoAlert && <Box color="red.500">🚨 You have entered a geofenced area! 🚨</Box>}

            <VStack spacing={3} mb={4}>
                <Input
                    placeholder="Enter destination..."
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <Button onClick={handleSearch} colorScheme="blue">
                    Search
                </Button>
                <Button onClick={planRoute} colorScheme="green">
                    Plan Route
                </Button>
            </VStack>

            <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>You are here!</Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
};

export default React.memo(MapComponent);
