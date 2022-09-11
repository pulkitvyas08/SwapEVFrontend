import { Heading, Flex, Select } from "@chakra-ui/react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

import { MapMarker } from "lib/types/mapMarker";

import { delhiMarkers, gurgaonMarkers, noidaMarkers } from "./allMarkers";

const containerStyle = {
  width: "100%",
  height: "450px",
};

function MyComponent() {
  const [center, setCenter] = useState({
    lat: 28.568238,
    lng: 77.219666,
  });
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBcf-4VVw3jUW0rBTGH8d4IWMhzxppEhKk",
  });
  const [selectedCity, setSelectedCity] = useState("Delhi");

  const onLoad = React.useCallback(
    function callback(map: any) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
    },
    [center]
  );

  useEffect(() => {
    if (selectedCity === "Delhi") {
      setCenter({
        lat: 28.568238,
        lng: 77.219666,
      });
      delhiMarkers.map((marker) =>
        setMarkers((prev) => [
          ...prev,
          { lat: Number(marker.lat), lng: Number(marker.lng) },
        ])
      );
    } else if (selectedCity === "Noida") {
      setCenter({
        lat: 28.5797,
        lng: 77.3407,
      });
      noidaMarkers.map((marker) =>
        setMarkers((prev) => [
          ...prev,
          { lat: Number(marker.lat), lng: Number(marker.lng) },
        ])
      );
    } else {
      setCenter({ lat: 28.4817, lng: 77.0958 });
      gurgaonMarkers.map((marker) =>
        setMarkers((prev) => [
          ...prev,
          { lat: Number(marker.lat), lng: Number(marker.lng) },
        ])
      );
    }
  }, [selectedCity]);

  return isLoaded ? (
    <Flex direction="column" rowGap="25px">
      <Heading>Find Stations in Your City</Heading>
      <Select
        value={selectedCity}
        onChange={(event) => setSelectedCity(event.target.value)}
      >
        <option value="Delhi">Delhi</option>
        <option value="Noida">Noida</option>
        <option value="Gurgaon">Gurgaon</option>
      </Select>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      >
        {markers &&
          markers.map((marker) => (
            <MarkerF
              position={{
                lat: Number(marker.lat),
                lng: Number(marker.lng),
              }}
              key={marker.id}
            />
          ))}
      </GoogleMap>
    </Flex>
  ) : (
    <Heading>Error Loading the map</Heading>
  );
}

export default React.memo(MyComponent);
