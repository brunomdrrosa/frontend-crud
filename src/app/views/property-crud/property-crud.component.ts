import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-property-crud',
  templateUrl: './property-crud.component.html',
  styleUrls: ['./property-crud.component.css'],
})
export class PropertyCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastro de Propriedades',
      icon: 'domain',
      routeUrl: '/properties',
    };
  }

  ngOnInit(): void {}

  navigateToPropertyCreate(): void {
    this.router.navigate(['/properties/create']);
  }
}
