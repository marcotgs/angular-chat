import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';

import { ChatInputComponent } from './chat-input/chat-input.component';

@NgModule({
  imports: [NbInputModule, NbButtonModule, NbIconModule, ReactiveFormsModule],
  exports: [ChatInputComponent],
  declarations: [ChatInputComponent],
})
export class MoleculesModule {}
