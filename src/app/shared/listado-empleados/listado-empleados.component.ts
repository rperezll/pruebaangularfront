import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Person } from 'src/app/interfaces/person';
import { DetalleEmpleadoComponent } from 'src/app/modals/detalle-empleado/detalle-empleado.component';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.scss']
})
export class ListadoEmpleadosComponent {

  @Input() listaEmpleados: Person[] = [];

  constructor(public dialog: MatDialog) {}

  goDetalle(item: Person) {
    const dialogRef: MatDialogRef<any> = this.dialog.open(DetalleEmpleadoComponent, {
      data: {
          title: 'Información de ' + item.surname + ' ' + item.surname2 + ', ' + item.name,
          item
      },
      disableClose: true,
      width: '600px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe((res: any) => {
        if (!res) {
            // If user press cancel
            return;
        }
    });
  }

}
