import { NgModule } from '@angular/core';

import { OrganismsModule } from './organisms/organisms.module';
import { MoleculesModule } from './molecules/molecules.module';
import { AtomsModule } from './atoms/atoms.module';

@NgModule({
  exports: [OrganismsModule, MoleculesModule, AtomsModule],
})
export class ComponentsModule {}
