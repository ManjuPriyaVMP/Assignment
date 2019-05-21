import { Component } from '@angular/core';
import {ProductService} from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sportsShop';
 pdts:any=[];
 count = 0;
  constructor(private remoteService: ProductService) { }
  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts = function(){
    this.remoteService.getRemoteProducts().subscribe((data)=>{
      console.log("received from rest api")
      console.log(data)
      this.pdts = data
      console.log("assigned to pds")
      console.log(this.pdts)
    },
    (error)=>{
      this.message = "Error"+JSON.stringify(error)
    })
  }
  getAllProductswithCategory = function(id){
    this.remoteService.getRemoteProductsCategory(id).subscribe((data)=>{
      this.pdts = data

      console.log("assigned to id")
      console.log(this.pdts)
    },
    (error)=>{
      this.message = "Error"+JSON.stringify(error)
    })
  }
}
