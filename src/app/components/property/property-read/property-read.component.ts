import { Component, OnInit } from '@angular/core';
import { Property } from '../property.model';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-read',
  templateUrl: './property-read.component.html',
  styleUrls: ['./property-read.component.css'],
})
export class PropertyReadComponent implements OnInit {
  properties: Property[];
  displayedColumns = ['id', 'tenant', 'address', 'date', 'action'];

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.read().subscribe((properties) => {
      this.properties = properties;
      console.log(properties);
    });
  }
}
