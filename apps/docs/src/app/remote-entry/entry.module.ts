import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { MaterialModule } from "@tibesty/material";
import { UiCompModule } from "@tibesty/ui-comp";

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(remoteRoutes), UiCompModule],
  providers: [],
})
export class RemoteEntryModule {}
