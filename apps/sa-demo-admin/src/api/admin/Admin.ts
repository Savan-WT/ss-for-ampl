import { User } from "../user/User";

export type Admin = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  password: string | null;
  superAdmin: boolean | null;
  updatedAt: Date;
  user?: User | null;
  username: string | null;
};
