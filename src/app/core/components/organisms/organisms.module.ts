import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ChatContainerComponent } from './chat-container/chat-container.component';

@NgModule({
  imports: [NbCardModule],
  exports: [ChatContainerComponent],
  declarations: [ChatContainerComponent],
})
export class OrganismsModule {}
