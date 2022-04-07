import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEventHandler, IRemoteComponent } from '@models/remoteComponent.model';
import {
  ISomethingComponentInput,
  SomethingComponentEventsNames,
} from '@models/something-component.model';
import { mfConfig } from '@constants/mfConfig';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  somethingConfigData: IRemoteComponent = {
    ...mfConfig.avaluosMf.modules.somethingComponent,
    type: 'component',
  };

  somethingComponentInputs: ISomethingComponentInput = {
    data: {
      message: 'asdasdasd',
      token: mfConfig.avaluosMf.token,
    },
  };

  somethingComponentInputs2: ISomethingComponentInput = {
    data: {
      message: 'mensaje de token valido',
      token: mfConfig.avaluosMf.token,
    },
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
