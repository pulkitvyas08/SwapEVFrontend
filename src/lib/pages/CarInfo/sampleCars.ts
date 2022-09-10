import { faker } from "@faker-js/faker";

import { Vehicle } from "lib/types/vehicle";
import { randomIntFromInterval } from "lib/utils";

export function createRandomUser(): Vehicle {
  return {
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    licenseNo: faker.vehicle.vin(),
    carPurchaseDate: faker.date.past(),
    lastBatteryPurchase: faker.date.past(),
    chargePercentage: randomIntFromInterval(0, 100),
  };
}

export const CarList: Vehicle[] = [];

Array.from({ length: 1 }).forEach(() => {
  CarList.push(createRandomUser());
});
