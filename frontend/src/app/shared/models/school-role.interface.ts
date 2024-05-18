import { ISystemPermission } from "./system-permission.interface";

export interface ISchoolRole {
  role_id: number;
  role_name: string;
  role_description: string;
  school_id: string;
  permissions?: ISystemPermission[];
}
