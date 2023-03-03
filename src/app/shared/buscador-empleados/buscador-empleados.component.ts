import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-buscador-empleados',
  templateUrl: './buscador-empleados.component.html',
  styleUrls: ['./buscador-empleados.component.scss']
})
export class BuscadorEmpleadosComponent implements OnInit, AfterViewInit {
  @ViewChildren('filter') filters: any;
  busquedaEmpleado: string = '';

  @Output() busqueda = new EventEmitter<any>();

  @Input() listaEmpleados: Person[] = [];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.filters.forEach((x: any) => {
      fromEvent(x.nativeElement, 'input')
          .pipe(
              distinctUntilChanged(),
              debounceTime(700))
          .subscribe(() => {
              this.searchEmpleados(this.busquedaEmpleado);
          });
    });
  }

  searchEmpleados(search: string) {
    const auxList: Person[] =  Object.assign([], this.listaEmpleados);
    if (search === '') {
      this.busqueda.emit(auxList.slice(0, 5));
    } else {
      this.busqueda.emit(auxList.filter(item => new RegExp(search).test(item.name.toLowerCase())).slice(0, 5));
    }
  }

}
