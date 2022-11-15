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
  name: string;
  phone: string;
  email: string;
}

export const emptyInsTransAviEntry:InsTransAvi = {
  name: '',
  phone: '',
  email: ''
}
