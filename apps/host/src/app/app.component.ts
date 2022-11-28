import { Component } from '@angular/core';
import { KEYS } from "@tibesty/data-model";

@Component({
  selector: 'tibesty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  KEYS = KEYS;
}
