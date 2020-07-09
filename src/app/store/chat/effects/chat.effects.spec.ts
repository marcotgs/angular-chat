import { TestScheduler } from 'rxjs/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Message } from '@shared/models';
import { Action } from '@ngrx/store/src/models';

import { Observable } from 'rxjs';
import { ChatEffect } from './chat.effects';
import {
  addMessageSuccess,
  addMessage,
  readMessages,
  readMessagesSuccess,
} from '../actions';
import { PERSON } from '@shared/constants';

describe('ChatEffects', () => {
  let testScheduler: TestScheduler;
  let actions$: Observable<Action>;
  let effect: ChatEffect;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    TestBed.configureTestingModule({
      providers: [provideMockActions(() => actions$), ChatEffect],
    });
    effect = TestBed.inject(ChatEffect);
  });

  it('should map payload to `addMessageSuccess` action', () => {
    const payload: Message = {
      date: new Date('2020-07-09'),
      message: 'test',
      person: {
        name: 'Person 1',
        id: 1,
      },
    };

    testScheduler.run(({ hot, expectObservable }) => {
      actions$ = hot('-a', {
        a: addMessage(payload),
      });

      expectObservable(effect.addMessage$).toBe('-b', {
        b: addMessageSuccess(payload),
      });
    });
  });

  it('should map payload to `readMessagesSuccess` action', () => {
    const payload = { personId: PERSON.FIRST_PERSON.id };

    testScheduler.run(({ hot, expectObservable }) => {
      actions$ = hot('-a', {
        a: readMessages(payload),
      });

      expectObservable(effect.readMessages$).toBe('-b', {
        b: readMessagesSuccess(payload),
      });
    });
  });
});
