import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { IRemoteComponent } from '@models/remoteComponent.model';
import { LoadRemoteComponentService } from '@services/load-remote-component.service';

@Component({
  selector: 'app-load-remote-component',
  templateUrl: './load-remote-component.component.html',
  styleUrls: ['./load-remote-component.component.scss'],
})
export class LoadRemoteComponentComponent implements AfterViewInit {
  @ViewChild('loadMfComponent', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  @Input() props: any = {};
  @Input() events: any[] = [];
  @Input() componentData: IRemoteComponent;
  constructor(private loadRemote: LoadRemoteComponentService) {}

  async ngAfterViewInit() {
    const { props, events } = this;
    const config = {
      ...this.componentData,
      config: { props, events },
    };
    await this.loadRemote.loadComponent<any, any>(this.container, config);
  }
}
