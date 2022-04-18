import { IRemoteComponentInput } from './remoteComponent.model';
type Istatus = 'Alive' | 'Dead';
type IGender = 'Male' | 'Female';

interface IChareacterLocation {
  name: string;
  url: string;
}

export type ICardInput = {
  data: {
    id: number;
    name: string;
    image: string;
    status: Istatus;
    location: IChareacterLocation;
    episodes: number;
    species: string;
    gender: IGender;
  };
};
