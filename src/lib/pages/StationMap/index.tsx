import { Heading } from "@chakra-ui/react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

import { MapMarker } from "lib/types/mapMarker";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  latitude: 28.568238,
  longitude: 77.219666,
};

function MyComponent() {
  const [markers, setMarkers] = useState<MapMarker[]>();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBcf-4VVw3jUW0rBTGH8d4IWMhzxppEhKk",
  });

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center as LatLng);
    map.fitBounds(bounds);
  }, []);

  return isLoaded ? (
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
              latitude: Number(marker.latitude),
              longitude: marker.longitude,
            }}
            key={marker.id}
          />
        ))}
    </GoogleMap>
  ) : (
    <Heading>Error Loading the map</Heading>
  );
}

export default React.memo(MyComponent);
