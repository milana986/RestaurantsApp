import { Component, OnInit, Input } from '@angular/core';

import { Restaurant } from '../../model/restaurant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantModalComponent } from '../restaurant-modal/restaurant-modal.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
@Input() restaurant: Restaurant;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }	

  open(){
  	const modalRef = this.modalService.open(RestaurantModalComponent);
    modalRef.componentInstance.restaurant = this.restaurant; 
  }						

}
