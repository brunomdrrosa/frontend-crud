import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Router } from '@angular/router';
import { Property } from '../property.model';

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css'],
})
export class PropertyCreateComponent implements OnInit {
  property: Property = {
    tenant: '',
    address: '',
    date: '',
  };

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createProperty(): void {
    this.propertyService.create(this.property).subscribe(() => {
      this.propertyService.showMessage('Propriedade criado com sucesso!');
      this.router.navigate(['/properties']);
    });
  }

  cancel(): void {
    this.router.navigate(['/properties']);
  }
}
