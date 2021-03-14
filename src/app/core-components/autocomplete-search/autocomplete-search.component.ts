import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { concatMap, map, startWith } from 'rxjs/operators';
import { IUserData, IUsersRequest } from '../../api-call/api-call.interface';
import { ApiCallService } from '../../api-call/api-call.service';

@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.scss'],
})
export class AutocompleteSearchComponent implements OnInit {
  @ViewChild('auto') autocomplete: MatAutocomplete;
  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger })
  autoCompleteTrigger: MatAutocompleteTrigger;

  @Output() userSelectedEvent = new EventEmitter<string>();

  myControl = new FormControl();
  options: Observable<IUserData[]>;
  showTooltip = false;

  constructor(private apiCallService: ApiCallService) {}

  ngOnInit() {
    this.options = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return typeof value === 'string' ? value : value.name;
      }),
      concatMap((name: string) => this.apiCallService.getUserByName(name)),
      map((usersRequest: IUsersRequest) => {
        if (usersRequest.data.length === 1) {
          this.showTooltip = true;
        }
        return usersRequest.data
      })
    );
  }

  displayFn(user: IUserData): string {
    return user && user.name ? user.name : '';
  }

  onButtonClick() {
    this.myControl.setValue('');
    this.userSelectedEvent.emit('');
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.userSelectedEvent.emit(event.option.value);
  }

  onEnterEvent() {
    if (this.autocomplete.isOpen && this.autocomplete.options.length === 1) {
      this.myControl.setValue(this.autocomplete.options.first.value);
      this.userSelectedEvent.emit(this.myControl.value);
      this.autoCompleteTrigger.closePanel();
    }
  }
}
