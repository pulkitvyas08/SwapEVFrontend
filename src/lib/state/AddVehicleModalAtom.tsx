import { atom } from "recoil";

export const addVehicleModalState = atom<boolean>({
  key: "addVehicleModalState",
  default: false,
});
