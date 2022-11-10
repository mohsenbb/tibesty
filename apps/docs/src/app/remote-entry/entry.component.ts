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
      name: 'Transport & Aviation Insurance',
      list: [
        {
          name: 'Airplane body',
        },
        {
          name: 'Open Cargo Transport'
        },
        {
          name: 'Ship body'
        },
        {
          name: 'Cargo Shipment - Air'
        },
        {
          name: 'Cargo Shipment - Land'
        },
        {
          name: 'Cargo Shipment - Sea'
        }
      ]
    },
    {
      name: 'Car Insurance',
      list: [
        {
          name: 'Car body',
        },
        {
          name: 'Car Cargo Transport'
        },
        {
          name: 'Car body'
        },
        {
          name: 'Car Shipment - Land'
        },
        {
          name: 'Car Shipment - Sea'
        }
      ]
    }
  ]

  handleSelection(selection: any) {
    console.log('==> load detail of:', selection)
  }
}


