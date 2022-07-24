export type Role =
  | 'preparer'
  | 'approver'
  | 'admin_preparer'
  | 'admin_approver'
  | 'supervisor'
  | 'operator';
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

export type AccountTag =
  | 'Sensitive Client'
  | 'Complaint'
  | 'VIP'
  | 'Bankruptcy'
  | 'AML';

export interface AccountInformation {
  name: string;
  tags?: AccountTag[];
  accountNumber?: string;
  trustee?: string;
  hkid?: string;
  scheme?: string;
  accountType?: string;
  accountStatus?: string;
}
