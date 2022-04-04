import { environment } from 'src/environments/environment';
import { ImfConfig } from '../models/mfConfig.model';

export const mfConfig: ImfConfig = {
  avaluosMf: {
    exposedModule: './AvaluoModule',
    remoteEntry: environment.avaluosMf,
  },
  somethingComponent: {
    exposedModule: './SomethingComponent',
    remoteEntry: environment.avaluosMf,
  },
};
