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
        remoteEntry: mfConfig.avaluosMf.modules.avaluosModule.remoteEntry,
        type: 'module',
      }).then((m) => m.AvaluoModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      loadRemoteModule({
        exposedModule:
          mfConfig.avaluosMf.modules.charactersModule.exposedModule,
        remoteEntry: mfConfig.avaluosMf.modules.charactersModule.remoteEntry,
        type: 'module',
      }).then((m) => m.CharactersModule),
  },
  {
    path: 'something',
    loadChildren: () =>
      import('./containers/something/something.module').then(
        (m) => m.SomethingModule
      ),
  },
  {
    path: 'something-no-secure',
    loadChildren: () =>
      import(
        './containers/something-no-secure/something-no-secure.module'
      ).then((m) => m.SomethingNoSecureModule),
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
