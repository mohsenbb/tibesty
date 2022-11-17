export interface AccordionNode {
  id: string;
  list?: AccordionNode[];
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
