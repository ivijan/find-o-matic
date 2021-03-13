import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { UserData, UsersRequest } from '../../api-call/api-call.interface';
import { ApiCallService } from '../../api-call/api-call.service';

@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss'],
})
export class AutocompleteSearchComponent implements OnInit {
  @Output() userSelectedEvent = new EventEmitter<string>();

  myControl = new FormControl();
  options: UserData[] = [];
  filteredOptions: Observable<UserData[]>;

  constructor(private apiCallService: ApiCallService) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => {
        this.apiCallService
          .getUserByName(name)
          .subscribe((usersRequest: UsersRequest) => {
            this.options = usersRequest.data;
          });
        return name ? this._filter(name) : this.options.slice();
      })
    );
  }

  displayFn(user: UserData): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): UserData[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  onButtonClick() {
    this.myControl.setValue('');
    this.userSelectedEvent.emit('');
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.userSelectedEvent.emit(event.option.value);
  }
}
