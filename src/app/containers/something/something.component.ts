import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mfConfig } from '@constants/mfConfig';
import { IEventHandler, IRemoteComponent } from '@models/remoteComponent.model';
import {
  ISomethingComponentInput,
  SomethingComponentEventsNames,
} from '@models/something-component.model';

@Component({
  selector: 'app-page-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss'],
})
export class SomethingComponent {
  /**
   * contadores, utilizados para la demostracion de escucha de eventos
   * de un componente exportado desde un microfront
   */
  counter = 1;

  /**
   * configuracion para poder renderizar el componente que llega
   * desde un microfront
   */
  somethingConfigData: IRemoteComponent = {
    ...mfConfig.avaluosMf.modules.somethingComponent,
    type: 'component',
  };

  /**
   * Mapeo de los inputs del componente exportado del microfront
   */
  somethingComponentInputs: ISomethingComponentInput;

  somethingComponentEvents: IEventHandler<SomethingComponentEventsNames>[];

  constructor(private router: Router) {
    /**
     * mapeo de eventos y handlers para los outputs del componete something
     */
    this.somethingComponentEvents = [
      {
        eventHandler: this.redirectToAvaluos,
        eventName: 'onHandleClick',
      },
      {
        eventHandler: this.handleIncrement,
        eventName: 'onHandleClick2',
      },
    ];
  }

  handleIncrement = () => {
    this.counter++;
  };
  redirectToAvaluos = () => {
    this.router.navigate(['/remote']);
  };

  ionViewDidEnter() {
    this.somethingComponentInputs = {
      data: {
        message:
          'Mensaje enviado como input desde aplicacion en ionic a microfront en angular',
        token: mfConfig.avaluosMf.token,
      },
    };
  }
}
