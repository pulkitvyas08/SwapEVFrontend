import axios from "axios";

import { MapMarker } from "lib/types/mapMarker";

import { url } from ".";

export const getNearestStation = async (coordinates: MapMarker) => {
  try {
    console.log(`${url}charging_stations`);
    return await axios.get(`${url}charging_stations/`, {
      params: coordinates,
    });
  } catch (error) {
    console.log("getNearestStation: ", error);
  }
  return -1;
};
