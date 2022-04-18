import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomethingRoutingModule } from './something-routing.module';
import { LoadRemoteComponentModule } from '@components/load-remote-component/load-remote-component.module';
import { SomethingComponent } from './something.component';

@NgModule({
  declarations: [SomethingComponent],
  imports: [CommonModule, SomethingRoutingModule, LoadRemoteComponentModule],
})
export class SomethingModule {}
