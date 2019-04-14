import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';

import { DxDataGridModule } from 'devextreme-angular';
import { AppStore, appStoreProviders } from './store/store';
import { PersonsActions } from './api/persons.actions';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule, DxDataGridModule
  ],
  providers: [
    appStoreProviders, PersonsActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
