import { ReactNode } from 'react';

export interface AppContextType {
  loaded: boolean;
  updateLoaded: (payload: boolean) => void;
}

export interface ProviderProps {
  children: ReactNode;
}

export interface ShipmentStatus {
  name: string;
  creation: string;
  modified: string;
  modified_by: string;
  owner: string;
  docstatus: number;
  idx: number;
  status: string;
  color: string;
  _user_tags: null;
  _comments: null;
  _assign: null;
  _liked_by: null;
}

export interface Shipment {
  name: string;
  creation: string;
  modified: string;
  modified_by: string;
  owner: string;
  docstatus: number;
  idx: number;
  sender: string;
  origin_area: null;
  origin_city: string;
  sender_phone: null;
  sender_name: string;
  origin_adress_line_1: null;
  origin_country: string;
  sender_address: null;
  origin_address_line2: null;
  origin_state: string;
  consignee: string;
  destination_area: null;
  destination_city: string;
  consignee_phone: null;
  consignee_name: null;
  destination_address_line_1: null;
  destination_country: string;
  consignee_address: null;
  destination_address_line_2: null;
  destination_state: string;
  origin_zone: string;
  destination_zone: string;
  service: null;
  total_weight: number;
  status: string;
  movable_units: null;
  amended_from: null;
  company: string;
  cod: number;
  total_cod: number;
  barcode: string;
  branch: null;
  currency: string;
  pieces: number;
  not_available: number;
  percentage: number;
  total_fees: number;
  awb_terms_template: null;
  awb_terms_and_conditions: null;
  sales_invoice_created: number;
  _user_tags: null;
  _comments: null;
  _assign: null;
  _liked_by: null;
  geolocation_evkp: null;
  shipping_service: string;
  delivery_time: null;
  from_client_side: number;
  destination_branch: null;
  origin_branch: null;
  delivery_due_date: null;
  company_currency: string;
  exchange_rate: number;
  overdue: number;
  posting_date: string;
  posting_time: string;
  is_returned: number;
  custodian: null;
  assignee: null;
  closed: number;
  custodian_commission: number;
  awb_date: string;
  type: null;
  origin_address_line_1: null;
  service_type: null;
  adjusted_cod: number;
}

[
  {
    name: '210173066690',
    creation: '2024-01-10 17:09:42.119824',
    modified: '2024-01-31 12:42:46.211055',
    modified_by: 's7saway@brandimic.com',
    owner: 'omar.sherif@smsaexpress.com',
    docstatus: 1,
    idx: 0,
    sender: 'EG1155',
    origin_area: null,
    origin_city: 'CAIRO',
    sender_phone: null,
    sender_name: 'BBUSINESS FOR DEVELOPMENT',
    origin_adress_line_1: null,
    origin_country: 'Egypt',
    sender_address: null,
    origin_address_line2: null,
    origin_state: 'CAIRO',
    consignee: 'Default Consignee',
    destination_area: null,
    destination_city: 'CAIRO',
    consignee_phone: null,
    consignee_name: null,
    destination_address_line_1: null,
    destination_country: 'Egypt',
    consignee_address: null,
    destination_address_line_2: null,
    destination_state: 'CAIRO',
    origin_zone: 'Dom 1',
    destination_zone: 'Dom 1',
    service: null,
    total_weight: 0.5,
    status: 'New ShipmentTT',
    movable_units: null,
    amended_from: null,
    company: 'SMSA EXPRESS',
    cod: 0.0,
    total_cod: 0.0,
    barcode: '210173066690',
    branch: null,
    currency: 'EGP',
    pieces: 1,
    not_available: 0,
    percentage: 0.0,
    total_fees: 0.0,
    awb_terms_template: null,
    awb_terms_and_conditions: null,
    sales_invoice_created: 0,
    _user_tags: null,
    _comments: null,
    _assign: null,
    _liked_by: null,
    geolocation_evkp: null,
    shipping_service: 'Domestic - Corporate',
    delivery_time: null,
    from_client_side: 0,
    destination_branch: null,
    origin_branch: null,
    delivery_due_date: null,
    company_currency: 'EGP',
    exchange_rate: 1.0,
    overdue: 0,
    posting_date: '2023-12-31',
    posting_time: '17:08:52.980165',
    is_returned: 0,
    custodian: null,
    assignee: null,
    closed: 0,
    custodian_commission: 0.0,
    awb_date: '2023-12-06',
    type: null,
    origin_address_line_1: null,
    service_type: null,
    adjusted_cod: 0.0,
  },
];
