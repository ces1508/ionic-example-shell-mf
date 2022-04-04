import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadRemoteComponentComponent } from './load-remote-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadRemoteComponentComponent],
  exports: [LoadRemoteComponentComponent],
})
export class LoadRemoteComponentModule {}
