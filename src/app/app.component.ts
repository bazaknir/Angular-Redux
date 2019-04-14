import { Component } from '@angular/core';
import { AppStore } from './store/store';
import { PersonsActions } from './api/persons.actions';
import { IPersonsData } from './model/persons.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppStore';

  constructor(private store: AppStore, private personsActions: PersonsActions) {

  }

  get state() {
    return this.store.getState();
  }

  updatePersons(person) {
    this.store.dispatch(this.personsActions.setData(person));
  }
}
