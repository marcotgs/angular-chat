import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PERSON } from '@shared/constants';
import { AppState } from '@store/app.state';
import { selectChatCurrentPerson, setPerson } from '@store/chat';
import { Person } from '@shared/models/person';

@Component({
  selector: 'chat-person-switcher',
  templateUrl: './chat-person-switcher.component.html',
  styleUrls: ['./chat-person-switcher.component.scss'],
})
export class ChatPersonSwitcherComponent {
  public persons = PERSON;
  public currentPerson: Observable<Person>;
  constructor(private store: Store<AppState>) {
    this.currentPerson = store.pipe(select(selectChatCurrentPerson));
  }

  public changePerson(person: Person): void {
    this.store.dispatch(setPerson({ person }));
  }
}
