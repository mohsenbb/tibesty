import { Component, OnInit } from '@angular/core';
import { AccordionNode } from "@tibesty/data-model";
import { InsTransAviStore } from "@tibesty/comp-store";

@Component({
  selector: 'tibesty-docs-entry',
  templateUrl: 'entry.component.html',
  styleUrls: ['entry.component.scss'],
  providers: [InsTransAviStore]
})
export class RemoteEntryComponent implements OnInit {
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

  constructor(private store: InsTransAviStore) {
  }

  ngOnInit() {
    this.store.init();
  }

  handleSelection(selection: any) {
    console.log('==> load detail of:', selection)
  }
}
