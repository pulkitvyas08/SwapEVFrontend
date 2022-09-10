import { faker } from "@faker-js/faker";

import { User } from "lib/types/user";

export const SampleUser: User = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatarUrl: faker.image.avatar(),
};
