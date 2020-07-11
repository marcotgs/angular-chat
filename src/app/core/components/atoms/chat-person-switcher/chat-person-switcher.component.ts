import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { PERSON } from '@shared/constants';
import { AppState } from '@store/app.state';
import {
  selectChatCurrentPerson,
  setPerson,
  selectNumberUnreadMessages,
  readMessages,
} from '@store/chat';
import { Person } from '@shared/models/person';
import { AutoUnsubscribeComponent } from '@shared/components/utilities/auto-unsubscribe';

@Component({
  selector: 'chat-person-switcher',
  templateUrl: './chat-person-switcher.component.html',
  styleUrls: ['./chat-person-switcher.component.scss'],
})
export class ChatPersonSwitcherComponent extends AutoUnsubscribeComponent
  implements OnDestroy {
  public persons = PERSON;
  public currentPerson: Person | null = null;
  public unreadMessages: string = '';
  private unreadMessages$: Subscription | null = null;

  constructor(private store: Store<AppState>) {
    super();
    this.addSubscriptions(
      store.pipe(select(selectChatCurrentPerson)).subscribe((person) => {
        this.currentPerson = person;
      }),
    );
    this.getUnreadMessages();
  }

  public changePerson(person: Person): void {
    this.store.dispatch(
      readMessages({ personId: this.currentPerson?.id as number }),
    );
    this.store.dispatch(setPerson({ person }));
    this.getUnreadMessages();
  }

  public ngOnDestroy() {
    super.ngOnDestroy();
    this.unreadMessages$?.unsubscribe();
  }

  private getUnreadMessages() {
    if (this.unreadMessages$) this.unreadMessages$.unsubscribe();
    this.unreadMessages$ = this.store
      .pipe(select(selectNumberUnreadMessages, this.currentPerson?.id))
      .subscribe((messagesNumber) => {
        this.unreadMessages = messagesNumber ? String(messagesNumber) : '';
      });
  }
}
