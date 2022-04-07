export interface ImfConfig {
  [microfronent: string]: {
    token: string;
    modules: {
      [module: string]: ImfConfigModule;
    };
  };
  // eslint-disable-next-line @typescript-eslint/member-ordering
}

interface ImfConfigModule {
  componentName: string;
  type: 'component' | 'module';
  exposedModule: string;
  remoteEntry: string;
  displayName: string;
}
