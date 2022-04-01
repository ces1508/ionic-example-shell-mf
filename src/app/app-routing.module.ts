import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'other',
    loadChildren: () =>
      import('./containers/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule({
        exposedModule: './AvaluoModule',
        remoteEntry: 'http://localhost:4003/remoteEntry.js',
        type: 'module',
      }).then((m) => m.AvaluoModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
