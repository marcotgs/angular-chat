import { NgModule } from '@angular/core';
import { NbActionsModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

import { UtilitiesModule } from '@shared/components/utilities/utilities.module';
import { ChatPersonSwitcherComponent } from './chat-person-switcher/chat-person-switcher.component';

@NgModule({
  imports: [NbActionsModule, CommonModule, UtilitiesModule],
  exports: [ChatPersonSwitcherComponent],
  declarations: [ChatPersonSwitcherComponent],
})
export class AtomsModule {}
