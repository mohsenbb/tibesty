import { Component } from '@angular/core';
import { TransKeyService } from "@tibesty/translation";

@Component({
  selector: 'tibesty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private transKeyService: TransKeyService) {
  }

  getTransKey(id: string) {
    return this.transKeyService.getTransKey(id);
  }
}
