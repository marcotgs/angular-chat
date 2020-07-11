import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  imports: [NbThemeModule.forRoot({ name: 'dark' }), NbChatModule.forRoot()],
  exports: [NbLayoutModule, NbEvaIconsModule],
})
export class NebularThemeModule {}
