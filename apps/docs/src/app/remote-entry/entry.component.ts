import { Component } from '@angular/core';
import { AccordionNode } from "@tibesty/data-model";

@Component({
  selector: 'tibesty-docs-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.scss']
})
export class RemoteEntryComponent {
  ACCORDION_DATA: AccordionNode[] = [
    {
      id: 'transport-aviation-insurance',
      list: [
        {
          id: 'airplane-body-responsibilities',
        },
        {
          id: 'open-cargo-transport'
        },
        {
          id: 'ship-body'
        },
        {
          id: 'cargo-shipment-air'
        },
        {
          id: 'cargo-shipment-land'
        },
        {
          id: 'cargo-shipment-sea'
        }
      ]
    },
    {
      id: 'car-insurance',
      list: [
        {
          id: 'car-body',
        },
        {
          id: 'car-cargo-transport'
        },
        {
          id: 'car-shipment-land'
        },
        {
          id: 'car-shipment-sea'
        }
      ]
    }
  ]

  handleSelection(selection: any) {
    console.log('==> load detail of:', selection)
  }
}
