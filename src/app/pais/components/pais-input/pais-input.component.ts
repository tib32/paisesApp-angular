import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: []
})
export class PaisInputComponent {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer:Subject <string>= new Subject();

  termino: string = '';
  buscar() {
    this.onEnter.emit(this.termino);
  }

}
