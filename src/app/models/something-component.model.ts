import { IRemoteComponentInput } from '@models/remoteComponent.model';

export interface ISomethingComponentInput {
  data: {
    message: string;
    token: string;
  } & IRemoteComponentInput;
}

export type SomethingComponentEventsNames = 'onHandleClick' | 'onHandleClick2';

interface ISomethingComponentOuput {
  onHandleClick: {
    subscribe: () => any;
  };
}

export interface ISomethingComponent
  extends ISomethingComponentInput,
    ISomethingComponentOuput {}
