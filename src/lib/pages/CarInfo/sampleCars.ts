import { faker } from "@faker-js/faker";

import { Car } from "lib/types/car";

export function createRandomUser(): Car {
  return {
    company: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    licenseNo: faker.vehicle.vin(),
    carPurchaseDate: faker.date.past(),
    lastBatteryPurchase: faker.date.past(),
  };
}

export const CarList: Car[] = [];

Array.from({ length: 1 }).forEach(() => {
  CarList.push(createRandomUser());
});
