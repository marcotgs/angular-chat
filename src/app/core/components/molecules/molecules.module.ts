import { NgModule } from '@angular/core';
import { NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';

import { ChatInputComponent } from './chat-input/chat-input.component';

@NgModule({
  imports: [NbInputModule, NbButtonModule, NbIconModule],
  exports: [ChatInputComponent],
  declarations: [ChatInputComponent],
})
export class MoleculesModule {}
