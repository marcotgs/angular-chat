import { NgModule } from '@angular/core';

import { ComponentsModule } from '@components/components.module';
import { NebularThemeModule } from '@shared/modules/nebular-theme.module';
import { HomePageComponent } from './home/home.component';

@NgModule({
  imports: [NebularThemeModule, ComponentsModule],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
})
export class PagesModule {}
