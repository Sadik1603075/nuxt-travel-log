import type { User } from "better-auth";

export type UserWithId = Omit<User, "id"> & {
  id: number;
};
