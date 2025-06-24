import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "firstName";

export const AdminTitle = (record: TAdmin): string => {
  return record.firstName?.toString() || String(record.id);
};
