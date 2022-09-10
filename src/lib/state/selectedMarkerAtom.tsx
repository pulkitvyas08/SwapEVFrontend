import { atom } from "recoil";

export const selectedMarker = atom<boolean>({
  key: "selectedMarker",
  default: false,
});
