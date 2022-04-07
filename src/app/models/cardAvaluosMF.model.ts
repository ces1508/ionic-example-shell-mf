import { IRemoteComponentInput } from './remoteComponent.model';

export type ICardInput = {
  data: IRemoteComponentInput & {
    message: string;
    title: string;
  };
};
