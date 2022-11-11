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
