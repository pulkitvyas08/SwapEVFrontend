import { Heading } from "@chakra-ui/react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

import { MapMarker } from "lib/types/mapMarker";

import { SampleMarkers } from "./sampleMarkers";

const containerStyle = {
  width: "100%",
  height: "200px",
};

const center = {
  lat: 28.568238,
  lng: 77.219666,
};

function MyComponent() {
  const [markers, setMarkers] = useState<MapMarker[]>();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBcf-4VVw3jUW0rBTGH8d4IWMhzxppEhKk",
  });

  useEffect(() => {
    setMarkers(SampleMarkers);
  }, []);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
    >
      {markers &&
        markers.map((marker) => (
          <MarkerF
            position={{ lat: marker.lat, lng: marker.lng }}
            key={marker.id}
          />
        ))}
    </GoogleMap>
  );
}

export default React.memo(MyComponent);
