export type Role =
  | 'preparer'
  | 'approver'
  | 'admin_preparer'
  | 'admin_approver';

export interface User {
  id: string;
  name: string;
  assignedDepartment: string;
  contactPerson: string;
  contactNumber: string;
  department: string;
  email: string;
  role?: Role;
}
