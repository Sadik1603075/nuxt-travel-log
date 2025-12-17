import type { UserWithId } from "~/server/auth/types";

declare module "h3" {
  type H3EventContext = {
    user?: UserWithId;
  };
}
