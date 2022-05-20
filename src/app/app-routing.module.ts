import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PropertyCrudComponent } from './views/property-crud/property-crud.component';
import { PropertyCreateComponent } from './components/property/property-create/property-create.component';
import { PropertyUpdateComponent } from './components/property/property-update/property-update.component';
import { PropertyDeleteComponent } from './components/property/property-delete/property-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'properties',
    component: PropertyCrudComponent,
  },
  {
    path: 'properties/create',
    component: PropertyCreateComponent,
  },
  {
    path: 'properties/update/:id',
    component: PropertyUpdateComponent,
  },
  {
    path: 'properties/delete/:id',
    component: PropertyDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
