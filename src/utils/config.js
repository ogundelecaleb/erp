//production server
// export const API_BASE_URL = 'http://94.229.79.27:55412/api/v1';

//live server
export const API_BASE_URL = 'https://erp-dev.duckdns.org/api';
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint



export const GETUSERS = getApiUrl('/users');
export const GETPROFILE = getApiUrl('/merchant/profile');
export const SETPIN= getApiUrl('/merchant/setpin');
export const DASHBOARDOVERVIEW = getApiUrl('/dashboard/overview');
export const CREATEACCESS = getApiUrl('/merchant/access');
export const UPLOAD = getApiUrl('/merchant/upload');
export const GETSETTLEMENTRECORD = getApiUrl('/settlement/getall');
export const EXPORTSETTLEMENT = getApiUrl('/settlement/export');
export const CREATESETTLEMENTACCT = getApiUrl('/settlementaccount/create');
export const UPDATESETTLEMENTACCT = getApiUrl('/settlementaccount/update');
export const GETSETTLEMENTACCOUNT = getApiUrl('/settlementaccount');
export const TRANSACTION = getApiUrl('/transaction/getall');
export const SUBMERCHANTTRANSACTION = getApiUrl('/transaction/getsubmerchanttransactions');
export const EXPORTTRANSACTION = getApiUrl('/transaction/export');
export const ADDUSER= getApiUrl('/usermanagement/adduser');
export const GETUSER= getApiUrl('/usermanagement/users');
export const GETBANK= getApiUrl('/supportedservices/getallbanks');
export const GETCOUNTRY= getApiUrl('/supportedservices/getallcountries');
export const GETCURRENCY= getApiUrl('/supportedservices/getallcurrencies');
export const INVOICE= getApiUrl('/invoice');
export const INVOICELIST= getApiUrl('/invoice/list');
export const SUBMERCHANTINVOICELIST= getApiUrl('/invoice/sub-merchant-pay-list');
export const INITIATEVIRTUALACCOUNNT= getApiUrl('/virtualaccount/initiate');
export const VALIDATEVIRTUALACCOUNNT= getApiUrl('/virtualaccount/validate');
export const GETVIRTUALACCOUNNT= getApiUrl('/virtualaccount');


export const GENERATEKEY = getApiUrl('/applicationprofile/generate');
export const GETALLKEYS = getApiUrl('/applicationprofile/getmerchantapplicationprofile');






