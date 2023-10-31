interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Finance Manager'],
  tenantName: 'Company',
  applicationName: 'Vehicle Financing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read company information'],
  ownerAbilities: ['Manage users', 'Manage company', 'Edit personal information', 'Manage tenant'],
  getQuoteUrl: 'https://app.roq.ai/proposal/40fb5a38-4bcd-48f4-86ee-2cc1874e7168',
};
