import axios from "axios";

import { MapMarker } from "lib/types/mapMarker";

import { url } from ".";

export const getNearestStation = async (coordinates: any) => {
  try {
    console.log(`${url}charging_stations`);
    const res = await axios.get(`${url}charging_stations/`, {
      params: {
        latitude: coordinates.lat.toString().substr(0, 10),
        longitude: coordinates.lng.toString().substr(0, 10),
      },
    });
    return res.data;
  } catch (error) {
    console.log("getNearestStation: ", error);
  }
  return -1;
};
