import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { MaterialModule } from "@tibesty/material";
import { UiCompModule } from "@tibesty/ui-comp";
import { AddContactComponent } from "../comps/add-contact/add-contact.component";
import { ContactsComponent } from "../comps/contacts/contacts.component";
import { HeaderComponent } from "../comps/header/header.component";
import { EditContactComponent } from "../comps/edit-contact/edit-contact.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AddContactComponent,
    ContactsComponent,
    HeaderComponent,
    RemoteEntryComponent,
    EditContactComponent,
    NxWelcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(remoteRoutes),
    UiCompModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class RemoteEntryModule {}
