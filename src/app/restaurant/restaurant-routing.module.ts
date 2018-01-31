import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
 
const restaurantRoutes:Routes = [
	{ path: 'restaurants/:cuisine', component: RestaurantListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(restaurantRoutes)
  ],
  declarations: [],
  exports: [
  	RouterModule
  ]
})
export class RestaurantRoutingModule { }