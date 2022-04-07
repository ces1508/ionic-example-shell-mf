import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { mfConfig } from '@constants/mfConfig';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@containers/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule({
        exposedModule: mfConfig.avaluosMf.modules.avaluosModule.exposedModule,
        remoteEntry: mfConfig.avaluosMf.modules.AvaluoModule.remoteEntry,
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
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
