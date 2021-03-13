import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from 'src/app/material-ui/material-ui.module';

import { AutocompleteSearchComponent } from './autocomplete-search.component';

describe('AutocompleteSearchComponent', () => {
  let component: AutocompleteSearchComponent;
  let fixture: ComponentFixture<AutocompleteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteSearchComponent ],
      imports: [
        HttpClientTestingModule,
        MaterialUiModule,
        NoopAnimationsModule
			],
			providers: [
				HttpClient
			],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
