import { NgModule } from '@angular/core';

import { OrganismsModule } from './organisms/organisms.module';
import { MoleculesModule } from './molecules/molecules.module';

@NgModule({
  exports: [OrganismsModule, MoleculesModule],
})
export class ComponentsModule {}
