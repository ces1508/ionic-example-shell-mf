import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { IEventHandler, IRemoteComponent } from '@models/remoteComponent.model';
import {
  ISomethingComponentInput,
  SomethingComponentEventsNames,
} from '@models/something-component.model';
import { mfConfig } from '@constants/mfConfig';
import { Apollo } from 'apollo-angular';
import { ICardInput } from '@models/cardAvaluosMF.model';
import { getAllCharactersQuery } from '@queries/rick-and-morty.query';
import { IFilterCharacter } from '@models/rick-and-morty.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  characters: any[];
  filterCharacter: IFilterCharacter = {};
  loading = true;
  error: any;

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
  somethingComponentInputs: ISomethingComponentInput = {
    data: {
      message:
        'Mensaje enviado como input desde aplicacion en ionic a microfront en angular',
      token: mfConfig.avaluosMf.token,
    },
  };

  /**
   * Mapeo de los inputs del componente exportado del microfront
   */
  somethingComponentInputs2: ISomethingComponentInput = {
    data: {
      message: 'mensaje de token valido',
      token: mfConfig.avaluosMf.token,
    },
  };

  /**
   * Eventos del componente something, este se exporta desde un microfront
   */
  somethingComponentEvents: IEventHandler<SomethingComponentEventsNames>[];

  /**
   * contadores, utilizados para la demostracion de escucha de eventos
   * de un componente exportado desde un microfront
   */
  counter = 1;
  counter2 = 2;

  /** */

  cardComponentProps: ICardInput[] = [];
  cardComponentConfig: IRemoteComponent = {
    ...mfConfig.avaluosMf.modules.cardComponent,
    type: 'component',
  };

  constructor(
    private router: Router,
    private apollo: Apollo,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCharactersFilter();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  getCharactersFilter() {
    this.apollo
      .watchQuery({
        query: getAllCharactersQuery,
        variables: {
          page: 1,
          filter: this.filterCharacter,
        },
      })
      .valueChanges.subscribe((result: any) => {
        this.characters = result?.data?.characters.results.map((character) => ({
          data: { ...character },
          buttonMessage: 'Ver',
        }));

        this.loading = result.loading;
        this.error = result.error;
      });
  }

  trackCard(index: number, item: ICardInput): number {
    return item.data.id;
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

  handleSearch(query: string) {
    this.filterCharacter = {
      name: query,
    };
    this.getCharactersFilter();
  }
}
