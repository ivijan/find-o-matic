import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class MaterialUiModule {}
