import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Person } from '../interfaces/person';
import { EmpleadosService } from '../servicios/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  providers: [EmpleadosService]
})
export class EmpleadosComponent  implements OnInit{
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  sourceEmpleados: Person[] = [];
  empleados: Person[] = [];

  constructor(
    private sEmpleados: EmpleadosService
  ) { }

  ngOnInit() {
    this.sEmpleados.getEmpleaados().subscribe((result: any)  => {
      this.sourceEmpleados = result.population.person;
      this.empleados = this.sourceEmpleados.slice(0, 5);
    });
  }

  loadEmpleados(event: any) {
    const lowValue = event.pageSize * event.pageIndex;
    const highValue = lowValue + event.pageSize;
    this.empleados = this.sourceEmpleados.slice(lowValue, highValue);
  }

  busqueda(ev: any) {
    this.empleados = ev;
  }
}
