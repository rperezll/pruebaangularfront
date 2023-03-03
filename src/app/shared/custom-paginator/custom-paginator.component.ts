import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss']
})
export class CustomPaginatorComponent implements OnInit, AfterViewInit  {

  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  @Output() paginationEvent = new EventEmitter<any>();

  @Input() length: number = 0;

  ngOnInit() {}

  ngAfterViewInit() {
    this.matPaginator.page
      .pipe(
        tap((event) => this.paginationEvent.emit(event))
      ).subscribe();
  }

}
