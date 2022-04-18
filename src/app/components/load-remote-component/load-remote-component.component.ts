import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
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
export class LoadRemoteComponentComponent implements AfterViewInit, OnChanges {
  @ViewChild('loadMfComponent', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;
  @Input() props: any = {};
  @Input() events: any[] = [];
  @Input() componentData: IRemoteComponent;
  constructor(private loadRemote: LoadRemoteComponentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.props.previousValue !== changes.props.currentValue &&
      !changes.props.firstChange
    ) {
      this.loadComponent();
    }
  }

  ngAfterViewInit() {
    this.loadComponent();
  }

  private async loadComponent() {
    const { props, events } = this;

    const config = {
      ...this.componentData,
      config: { props, events },
    };

    await this.loadRemote.loadComponent<any, any>(this.container, config);
  }
}
