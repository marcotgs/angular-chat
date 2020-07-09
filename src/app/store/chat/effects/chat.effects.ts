import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Message } from '@shared/models';

import { ChatActionsTypes } from '../chat.types';
import { addMessageSuccess, readMessagesSuccess } from '../actions';

@Injectable()
export class ChatEffect {
  constructor(private actions$: Actions) {}

  addMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatActionsTypes.AddMessage),
      pipe(map((payload: Message) => addMessageSuccess(payload))),
    );
  });

  readMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ChatActionsTypes.ReadMessages),
      pipe(
        map((payload: { personId: number }) => readMessagesSuccess(payload)),
      ),
    );
  });
}
