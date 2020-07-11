import { Component, OnDestroy } from '@angular/core';
import { AppState } from '@store/app.state';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Person, Message } from '@shared/models';
import {
  selectChatCurrentPerson,
  selectChatMessages,
} from '@store/chat/selectors';

@Component({
  selector: 'chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent implements OnDestroy {
  public currentPerson$: Observable<Person>;
  public messages$: Observable<Message[]>;
  private messagesSubscription$: Subscription;

  constructor(store: Store<AppState>) {
    this.currentPerson$ = store.pipe(select(selectChatCurrentPerson));
    this.messages$ = store.pipe(select(selectChatMessages));
    this.messagesSubscription$ = this.messages$.subscribe(() => {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    });
  }

  ngOnDestroy() {
    this.messagesSubscription$.unsubscribe();
  }
}
