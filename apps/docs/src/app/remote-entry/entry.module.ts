import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { MaterialModule } from "@tibesty/material";
import { UiCompModule } from "@tibesty/ui-comp";
import { InsTransAviComponent } from "../comps/ins-trans-avi/ins-trans-avi.component";
import { HeaderComponent } from "../comps/header/header.component";
import { DialogEditAddComponent } from "../comps/dialog-edit-add/dialog-edit-add.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UtilsModule } from "@tibesty/utils";

@NgModule({
  declarations: [
    InsTransAviComponent,
    HeaderComponent,
    RemoteEntryComponent,
    DialogEditAddComponent,
    NxWelcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(remoteRoutes),
    UiCompModule,
    ReactiveFormsModule,
    UtilsModule
  ],
  providers: [],
})
export class RemoteEntryModule {}
