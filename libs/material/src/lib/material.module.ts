import { NgModule } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTreeModule } from "@angular/material/tree";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTreeModule
  ]
})
export class MaterialModule {
}
