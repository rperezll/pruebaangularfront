import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatasourceService {

  constructor(private httpClient: HttpClient) { }

  getDatasource() {
    return this.httpClient.get("assets/data/datasource.json");
  }
}
