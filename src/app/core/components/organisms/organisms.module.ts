import { NgModule } from '@angular/core';
import { NbCardModule, NbChatModule } from '@nebular/theme';

import { ChatContainerComponent } from './chat-container/chat-container.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [NbCardModule, NbChatModule, CommonModule],
  exports: [ChatContainerComponent],
  declarations: [ChatContainerComponent],
})
export class OrganismsModule {}
