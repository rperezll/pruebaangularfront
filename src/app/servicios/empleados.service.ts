import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmpleadosService {

  constructor(private httpClient: HttpClient) { }

  getEmpleaados() {
    return this.httpClient.get("assets/data/info-population.json");
  }
}
