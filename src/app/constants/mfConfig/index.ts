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
      somethingComponent: {
        componentName: 'SomethingComponent',
        displayName: 'somethingmf',
        exposedModule: './SomethingComponent',
        remoteEntry: environment.avaluosMf,
        type: 'component',
      },
    },
  },
};
