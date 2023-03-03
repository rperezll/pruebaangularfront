import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DetalleEmpleadoComponent } from './modals/detalle-empleado/detalle-empleado.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginatorComponent } from './shared/custom-paginator/custom-paginator.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoEmpleadosComponent } from './shared/listado-empleados/listado-empleados.component';
import { BuscadorEmpleadosComponent } from './shared/buscador-empleados/buscador-empleados.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    EmpleadosComponent,
    DetalleEmpleadoComponent,
    CustomPaginatorComponent,
    ListadoEmpleadosComponent,
    BuscadorEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
