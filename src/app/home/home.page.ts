import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IEventHandler,
  IRemoteComponent,
} from '../models/remoteComponent.model';
import {
  ISomethingComponentInput,
  SomethingComponentEventsNames,
} from '../models/something-component.model';
import { mfConfig } from '../mfConfig';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  somethingConfigData: IRemoteComponent = {
    componentName: 'SomethingComponent',
    displayName: 'somethingmf',
    exposedModule: mfConfig.somethingComponent.exposedModule,
    type: 'component',
    remoteEntry: mfConfig.somethingComponent.remoteEntry,
  };

  somethingComponentInputs: ISomethingComponentInput = {
    data: 'hola mundo desde shell',
  };

  somethingComponentInputs2: ISomethingComponentInput = {
    data: 'hola mundo desde shell para el segundo componente',
  };

  somethingComponentEvents: IEventHandler<SomethingComponentEventsNames>[];

  counter = 1;
  counter2 = 2;

  constructor(private router: Router) {
    this.somethingComponentEvents = [
      {
        eventHandler: this.handleIncrement,
        eventName: 'onHandleClick',
      },
      {
        eventHandler: this.redirectToAvaluos,
        eventName: 'onHandleClick2',
      },
    ];
  }

  redirectToRemotePage() {
    this.router.navigate(['/remote']);
  }
  handleIncrement = () => {
    this.counter++;
  };

  redirectToAvaluos = () => {
    alert('escuchando output de microfront externo');
  };

  handleIncrement2 = () => {
    this.counter2 += 2;
  };

  handleIncrementFromRemote = (increment: number) => {
    this.counter2 += increment;
  };
}
