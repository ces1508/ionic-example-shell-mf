import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomethingNoSecureComponent } from './something-no-secure.component';

const routes: Routes = [
  {
    path: '',
    component: SomethingNoSecureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SomethingNoSecureRoutingModule {}
