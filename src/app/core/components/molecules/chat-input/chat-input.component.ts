import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '@store/app.state';
import { addMessage } from '@store/chat';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent {
  chatForm: FormGroup;
  constructor(private store: Store<AppState>) {
    this.chatForm = new FormGroup({
      message: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const { message } = this.chatForm.value;
    this.store.dispatch(addMessage({ message, date: new Date() }));
    this.chatForm.reset();
  }
}
