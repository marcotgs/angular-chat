import { NgModule } from '@angular/core';
import { NbActionsModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

import { ChatPersonSwitcherComponent } from './chat-person-switcher/chat-person-switcher.component';

@NgModule({
  imports: [NbActionsModule, CommonModule],
  exports: [ChatPersonSwitcherComponent],
  declarations: [ChatPersonSwitcherComponent],
})
export class AtomsModule {}
