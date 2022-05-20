import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../property.model';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-update',
  templateUrl: './property-update.component.html',
  styleUrls: ['./property-update.component.css'],
})
export class PropertyUpdateComponent implements OnInit {
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

  updateProperty(): void {
    this.propertyService.update(this.property).subscribe(() => {
      this.propertyService.showMessage('Propriedade atualizada com sucesso!');
      this.router.navigate(['/properties']);
    });
  }

  cancel(): void {
    this.router.navigate(['/properties']);
  }
}
