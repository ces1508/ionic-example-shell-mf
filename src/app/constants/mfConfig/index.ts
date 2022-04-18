import { environment } from '@environments/environment';
import { ImfConfig } from '@models/mfConfig.model';

export const mfConfig: ImfConfig = {
  avaluosMf: {
    token: environment.avaluosMfToken,
    modules: {
      avaluosModule: {
        exposedModule: './AvaluoModule',
        remoteEntry: environment.avaluosMf,
        componentName: '',
        displayName: '',
        type: 'module',
      },
      charactersModule: {
        exposedModule: './CharactersModule',
        remoteEntry: environment.avaluosMf,
        componentName: '',
        displayName: '',
        type: 'module',
      },
      somethingComponent: {
        componentName: 'SomethingComponent',
        displayName: 'app-something',
        exposedModule: './SomethingComponent',
        remoteEntry: environment.avaluosMf,
        type: 'component',
      },
      cardComponent: {
        componentName: 'CardComponent',
        displayName: 'card',
        exposedModule: './CardComponent',
        remoteEntry: environment.avaluosMf,
        type: 'component',
      },
    },
  },
};
