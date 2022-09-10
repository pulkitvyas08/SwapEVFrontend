import { faker } from "@faker-js/faker";

import { SwapData } from "lib/types/swapData";

export function createRandomUser(): SwapData {
  return {
    location: faker.address.streetAddress(),
    date: faker.date.past(),
  };
}

export const sampleSwaps: SwapData[] = [];

Array.from({ length: 5 }).forEach(() => {
  sampleSwaps.push(createRandomUser());
});
