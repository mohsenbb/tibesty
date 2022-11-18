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
  selection = 'cargoShipmentSea';

  ACCORDION_DATA: AccordionNode[] = [
    {
      id: 'transportAviationInsurance',
      list: [
        {
          id: 'airplaneBodyResponsibilities',
        },
        {
          id: 'openCargoTransport'
        },
        {
          id: 'shipBody'
        },
        {
          id: 'cargoShipmentAir'
        },
        {
          id: 'cargoShipmentLand'
        },
        {
          id: 'cargoShipmentSea'
        }
      ]
    },
    {
      id: 'carInsurance',
      list: [
        {
          id: 'carBody',
        },
        {
          id: 'carCargoTransport'
        },
        {
          id: 'carShipmentLand'
        },
        {
          id: 'carShipmentSea'
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
    this.selection = selection;
    console.log('==> load detail of:', selection)
  }
}
