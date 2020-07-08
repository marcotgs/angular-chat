import { NgModule } from '@angular/core';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  imports: [NbThemeModule.forRoot({ name: 'dark' })],
  exports: [NbLayoutModule, NbEvaIconsModule],
})
export class NebularThemeModule {}
