import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

const BASE_MODULES = [
  FormsModule,

  NgxSpinnerModule,

  MatSidenavModule,
  MatMenuModule,
  MatTableModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule,
  LayoutModule,
  MatCardModule,
  MatPseudoCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...BASE_MODULES,
  ],
  exports: [
    ...BASE_MODULES,
  ]
})
export class SharedModule { }
