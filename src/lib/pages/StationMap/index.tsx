import GoogleMapReact from "google-map-react";
import React from "react";

const StationMap = () => {
  const latitude = 28.568238;
  const longitude = 77.219666;
  const renderMarkers = (map: any, maps: any) => {
    return new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: "Hello World!",
    });
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR KEY" }}
        defaultCenter={{ lat: latitude, lng: longitude }}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  );
};

export default StationMap;
