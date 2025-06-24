import { Admin } from "../admin/Admin";
import { JsonValue } from "type-fest";

export type User = {
  admins?: Array<Admin>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
