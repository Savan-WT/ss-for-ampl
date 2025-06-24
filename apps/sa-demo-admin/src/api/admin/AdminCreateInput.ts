import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string | null;
  superAdmin?: boolean | null;
  user?: UserWhereUniqueInput | null;
  username?: string | null;
};
