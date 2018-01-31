import { Component, OnInit,OnChanges ,Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
 @Input() count: number;
 @Output() emiter = new EventEmitter<any>();
 pageSize: number = 12;
 activePage: number;
 numberOfPages: number;
 //pageArr:number[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.activePage = 1;
  	this.numberOfPages = Math.ceil(this.count/this.pageSize);
  }

  changePage(newPage){
  	if( newPage >= 1 && newPage <= this.numberOfPages){
  		this.activePage = newPage;
  		this.emiter.emit({"page": this.activePage});
  	}
  

  }

}
