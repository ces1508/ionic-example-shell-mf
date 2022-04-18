import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Input() placeholder: string;
  @Output() search: EventEmitter<string> = new EventEmitter();
  query: string;

  handleInput() {
    this.search.emit(this.query);
  }
}
