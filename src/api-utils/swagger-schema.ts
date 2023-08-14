/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: operations['AppController_getHello'];
  };
  '/auth/create-api-client': {
    post: operations['AuthController_createApiClient'];
  };
  '/accounts/create-from-request-info': {
    post: operations['AccountsController_createFromRequestInfo'];
  };
  '/accounts/create-from-id-token': {
    post: operations['AccountsController_createFromIdToken'];
  };
  '/accounts': {
    get: operations['AccountsController_getMyInfo'];
    patch: operations['AccountsController_update'];
  };
  '/change-data': {
    post: operations['ChangeDataController_processChangeData'];
  };
  '/user-info': {
    get: operations['UserInfoController_getUserInfo'];
    post: operations['UserInfoController_updateUserInfo'];
  };
  '/contacts': {
    get: operations['ContactsController_findAll'];
    post: operations['ContactsController_create'];
  };
  '/contacts/{id}': {
    get: operations['ContactsController_findOne'];
    delete: operations['ContactsController_remove'];
    patch: operations['ContactsController_update'];
  };
  '/payroll/exchange': {
    post: operations['PayrollController_exchange'];
  };
  '/payroll/check-if-payroll-connected': {
    get: operations['PayrollController_getMyInfo'];
  };
  '/payroll/finch-get-company-info': {
    get: operations['PayrollController_getComanyInfo'];
  };
  '/payroll/finch-get-payroll-info': {
    get: operations['PayrollController_getPayrollInfo'];
  };
  '/repayments': {
    get: operations['RepaymentsController_findAll'];
    post: operations['RepaymentsController_create'];
  };
  '/repayments/{id}': {
    get: operations['RepaymentsController_findOne'];
    delete: operations['RepaymentsController_remove'];
    patch: operations['RepaymentsController_update'];
  };
  '/payments': {
    get: operations['PaymentsController_findAll'];
    post: operations['PaymentsController_create'];
  };
  '/payments/{id}': {
    get: operations['PaymentsController_findOne'];
    delete: operations['PaymentsController_remove'];
    patch: operations['PaymentsController_update'];
  };
}

export interface components {
  schemas: {
    ApiClientRequest: {
      companyName: string;
    };
    ApiClientResponse: {
      clientId: string;
      clientSecret: string;
    };
    NewAccountInfo: {
      companyName: string;
      email: string;
      phone: string;
      firstName: string;
      lastName: string;
      accountUuid?: string;
      contactUuid?: string;
    };
    CreateAccountDto: {
      clientId: string;
      clientSecret: string;
      newAccountInfo: components['schemas']['NewAccountInfo'];
    };
    UpdateAccountDto: {
      legal_name?: string;
      federal_tax_id_no?: string;
      legal_address?: string;
      legal_address_city?: string;
      legal_address_state?: string;
      legal_address_zip?: number;
      industry?: string;
      website?: string;
      annualrevenue?: number;
    };
    ChangeData: { [key: string]: any };
    UpdateUserInfo: {
      propertyKey: string;
      propertyValue: string;
    };
    CreateContactDto: {
      uuid?: { [key: string]: any };
      accountid?: string;
      annual_income?: number;
      assistantname?: string;
      assistantphone?: string;
      birthdate?: string;
      drivers_license?: string;
      email?: string;
      is_applicant?: boolean;
      mailing_address?: string;
      mailing_address_city?: string;
      mailing_address_state?: string;
      mailing_address_zip?: string;
      name?: string;
      percent_of_ownership?: number;
      phone?: string;
      social_security_number?: string;
      title?: string;
    };
    UpdateContactDto: {
      uuid?: { [key: string]: any };
      accountid?: string;
      annual_income?: number;
      assistantname?: string;
      assistantphone?: string;
      birthdate?: string;
      drivers_license?: string;
      email?: string;
      is_applicant?: boolean;
      mailing_address?: string;
      mailing_address_city?: string;
      mailing_address_state?: string;
      mailing_address_zip?: string;
      name?: string;
      percent_of_ownership?: number;
      phone?: string;
      social_security_number?: string;
      title?: string;
    };
    ExchangeTokenRequest: {
      code: string;
    };
    PayrollConnectedStatus: {
      connected: boolean;
    };
    CreateRepaymentDto: { [key: string]: any };
    UpdateRepaymentDto: { [key: string]: any };
    CreatePaymentDto: { [key: string]: any };
    UpdatePaymentDto: { [key: string]: any };
  };
}

export interface operations {
  AppController_getHello: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  AuthController_createApiClient: {
    parameters: {};
    responses: {
      201: {
        content: {
          'application/json': components['schemas']['ApiClientResponse'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ApiClientRequest'];
      };
    };
  };
  AccountsController_createFromRequestInfo: {
    parameters: {};
    responses: {
      201: {
        content: {
          'application/json': string;
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateAccountDto'];
      };
    };
  };
  AccountsController_createFromIdToken: {
    parameters: {};
    responses: {
      201: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  AccountsController_getMyInfo: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': { [key: string]: any };
        };
      };
    };
  };
  AccountsController_update: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': { [key: string]: any };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateAccountDto'];
      };
    };
  };
  ChangeDataController_processChangeData: {
    parameters: {};
    responses: {
      201: {
        content: {
          'application/json': string;
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ChangeData'];
      };
    };
  };
  UserInfoController_getUserInfo: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': { [key: string]: any };
        };
      };
    };
  };
  UserInfoController_updateUserInfo: {
    parameters: {};
    responses: {
      201: {
        content: {
          'application/json': { [key: string]: any };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateUserInfo'];
      };
    };
  };
  ContactsController_findAll: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  ContactsController_create: {
    parameters: {};
    responses: {
      201: {
        content: {
          'application/json': string;
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateContactDto'];
      };
    };
  };
  ContactsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  ContactsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  ContactsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateContactDto'];
      };
    };
  };
  PayrollController_exchange: {
    parameters: {};
    responses: {
      201: unknown;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ExchangeTokenRequest'];
      };
    };
  };
  PayrollController_getMyInfo: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': components['schemas']['PayrollConnectedStatus'];
        };
      };
    };
  };
  PayrollController_getComanyInfo: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': { [key: string]: any };
        };
      };
    };
  };
  PayrollController_getPayrollInfo: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': { [key: string]: any };
        };
      };
    };
  };
  RepaymentsController_findAll: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  RepaymentsController_create: {
    parameters: {};
    responses: {
      201: {
        content: {
          'application/json': string;
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreateRepaymentDto'];
      };
    };
  };
  RepaymentsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  RepaymentsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  RepaymentsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateRepaymentDto'];
      };
    };
  };
  PaymentsController_findAll: {
    parameters: {};
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  PaymentsController_create: {
    parameters: {};
    responses: {
      201: {
        content: {
          'application/json': string;
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CreatePaymentDto'];
      };
    };
  };
  PaymentsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  PaymentsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
  };
  PaymentsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          'application/json': string;
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePaymentDto'];
      };
    };
  };
}

export interface external {}
