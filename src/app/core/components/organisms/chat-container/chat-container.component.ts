import { Component, OnInit } from '@angular/core';
import { AppState } from '@store/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
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
export class ChatContainerComponent {
  public currentPerson$: Observable<Person>;
  public messages$: Observable<Message[]>;

  constructor(private store: Store<AppState>) {
    this.currentPerson$ = store.pipe(select(selectChatCurrentPerson));
    this.messages$ = store.pipe(select(selectChatMessages));
  }
}
