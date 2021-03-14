import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { concatMap, map, startWith } from 'rxjs/operators';
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
  options: Observable<UserData[]>;

  constructor(private apiCallService: ApiCallService) {}

  ngOnInit() {
    this.options = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      concatMap((name: string) => this.apiCallService.getUserByName(name)),
      map((usersRequest: UsersRequest) => usersRequest.data)
    );
  }

  displayFn(user: UserData): string {
    return user && user.name ? user.name : '';
  }

  onButtonClick() {
    this.myControl.setValue('');
    this.userSelectedEvent.emit('');
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.userSelectedEvent.emit(event.option.value);
  }
}
