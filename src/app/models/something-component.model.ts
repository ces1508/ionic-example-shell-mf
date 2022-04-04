export interface ISomethingComponentInput {
  data: string;
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
