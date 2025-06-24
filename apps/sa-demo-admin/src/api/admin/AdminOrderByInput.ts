import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  superAdmin?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  username?: SortOrder;
};
