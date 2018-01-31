import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RestaurantService } from '../restaurant/services/restaurant.service';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { PaginationComponent } from './restaurant-list/pagination/pagination.component';
import { PriceComponent } from './restaurant-list/price/price.component';
import { RestaurantComponent } from './restaurant-list/restaurant/restaurant.component';
import { RatingStarComponent } from './restaurant-list/rating-star/rating-star.component';
import { RestaurantModalComponent } from './restaurant-list/restaurant-modal/restaurant-modal.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    FormsModule,

    RestaurantRoutingModule
  ],
  declarations: [
 	 RestaurantListComponent,
 	 PaginationComponent,
 	 PriceComponent,
 	 RestaurantComponent,
 	 RatingStarComponent,
 	 RestaurantModalComponent
  ],
  entryComponents:[ RestaurantModalComponent ],
  providers: [RestaurantService]
})
export class RestaurantModule { }
