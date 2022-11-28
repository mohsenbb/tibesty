export interface AccordionNode {
  id: string;
  list?: AccordionNode[];
}

export enum KEYS {
  about = "about",
  airplaneBodyResponsibilities = "airplaneBodyResponsibilities",
  accidentsAndCases = "accidentsAndCases",
  attachment = "attachment",
  dateIssue = "dateIssue",
  dateEntry = "dateEntry",
  documentManagement = "documentManagement",
  carBody = "carBody",
  carCargoTransport = "carCargoTransport",
  carInsurance = "carInsurance",
  carShipmentLand = "carShipmentLand",
  carShipmentSea = "carShipmentSea",
  cargoShipmentAir = "cargoShipmentAir",
  cargoShipmentLand = "cargoShipmentLand",
  cargoShipmentSea = "cargoShipmentSea",
  cash = "cash",
  currencyLibyan = "currencyLibyan",
  currencyType = "currencyType",
  home = "home",
  insured = "insured",
  numDoc = "numDoc",
  openCargoTransport = "openCargoTransport",
  ops = "ops",
  paymentsAndAccounting = "paymentsAndAccounting",
  paymentMethod = "paymentMethod",
  paymentNet = "paymentNet",
  paymentTotal = "paymentTotal",
  shipBody = "shipBody",
  transportAviationInsurance = "transportAviationInsurance"
}

export interface KeyProperties {
  id: string;
  title: string[];
  emoji?: string;
  text?: string[];
  extras?: undefined;
}

export interface InsTransAvi {
  id?: string;
  numDoc: string;
  insured: string;
  attachment: number;
  dateIssue: string;
  dateEntry: string;
  paymentNet: number;
  paymentTotal: number;
  currencyType?: string;
  paymentMethod?: string;
}

export const emptyInsTransAviEntry: InsTransAvi = {
  numDoc: '',
  insured: '',
  attachment: 0,
  dateIssue: '',
  dateEntry: '',
  paymentNet: 0,
  paymentTotal: 0,
  currencyType: 'LD',
  paymentMethod: 'Cash'
};
