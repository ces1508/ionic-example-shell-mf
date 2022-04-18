import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomethingNoSecureRoutingModule } from './something-no-secure-routing.module';
import { LoadRemoteComponentModule } from '@components/load-remote-component/load-remote-component.module';
import { SomethingNoSecureComponent } from './something-no-secure.component';

@NgModule({
  declarations: [SomethingNoSecureComponent],
  imports: [
    CommonModule,
    SomethingNoSecureRoutingModule,
    LoadRemoteComponentModule,
  ],
})
export class SomethingNoSecureModule {}
