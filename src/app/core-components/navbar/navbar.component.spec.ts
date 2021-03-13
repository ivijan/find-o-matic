import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from 'src/app/material-ui/material-ui.module';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [MaterialUiModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const testTitle = 'Find-o-matic';
    const fixture = TestBed.createComponent(NavbarComponent);
    const navbar = fixture.componentInstance;
    navbar.pageTitle = testTitle;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#example-title').textContent).toEqual(
      testTitle
    );
  });
});
