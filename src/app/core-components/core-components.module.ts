import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AutocompleteSearchComponent } from './autocomplete-search/autocomplete-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutocompleteSearchComponent, CardComponent, NavbarComponent],
  imports: [CommonModule, FormsModule, MaterialUiModule, ReactiveFormsModule],
  exports: [AutocompleteSearchComponent, CardComponent, NavbarComponent],
})
export class CoreComponentsModule {}
