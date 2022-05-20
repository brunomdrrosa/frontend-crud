import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../property.model';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-delete',
  templateUrl: './property-delete.component.html',
  styleUrls: ['./property-delete.component.css'],
})
export class PropertyDeleteComponent implements OnInit {
  property: Property;

  constructor(
    private propertyService: PropertyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.propertyService.readById(id).subscribe((property) => {
      this.property = property;
    });
  }

  deleteProperty(): void {
    this.propertyService.delete(this.property.id!).subscribe(() => {
      this.propertyService.showMessage('Propriedade excluída com sucesso!');
      this.router.navigate(['/properties']);
    });
  }

  cancel(): void {
    this.router.navigate(['/properties']);
  }
}
