import { Component } from '@angular/core';

export interface IEventHandler<Tev> {
  eventName: Tev;
  eventHandler: () => void;
}

interface IRemoteComponentInternalData<Tp, Tev> {
  props?: Tp;
  events?: IEventHandler<Tev>[];
}

export declare type IRemoteComponent<Tp = any, Tev = any> = {
  displayName: string;
  componentName: string;
  type: 'component';
  exposedModule: string;
  remoteEntry: string;
  config?: IRemoteComponentInternalData<Tp, Tev>;
};
export interface IRemoteComponentReturn {
  instance: Component;
}
