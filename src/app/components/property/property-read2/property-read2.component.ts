import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Property } from '../property.model';
import { PropertyRead2DataSource } from './property-read2-datasource';

@Component({
  selector: 'app-property-read2',
  templateUrl: './property-read2.component.html',
  styleUrls: ['./property-read2.component.css'],
})
export class PropertyRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Property>;
  dataSource: PropertyRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'tenant', 'address', 'date'];

  constructor() {
    this.dataSource = new PropertyRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
