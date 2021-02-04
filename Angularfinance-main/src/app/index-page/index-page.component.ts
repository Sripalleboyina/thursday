import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {Product} from '../product';
import {ActivatedRoute,Router} from '@angular/router';
import { Orders } from '../orders';
import {Buynowcredentials} from '../buynowcredentials';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  products:Product[] = [];
  orders:Orders[]=[];
  buynowcredentials:Buynowcredentials=new Buynowcredentials();

  constructor(private service:RegisterService,private router:ActivatedRoute, private route:Router) {
    
   }
  

  ngOnInit(): void {
    debugger;
    this.service.getAll().subscribe((data: Product[])=>{
      this.products = data;
      console.log(data);
      })
     console.log(this.products);
//      debugger;
// this.service.GetOrdersByCustomerId((this.service.customerId)).subscribe((data:Orders[])=>{
//   this.orders=data;
//   console.log(this.orders)
//})
  }
  onSubmit(product_id) {
    debugger;
    if (this.service.isUserLoggedIn) {
      this.buynowcredentials.product_id = product_id;
      this.buynowcredentials.customer_id = parseInt(this.service.customerId);
      this.service.PostBuyNowCred((this.buynowcredentials)).subscribe((data: number) => {
        if (data == 1) {
          this.route.navigateByUrl('ProductInfo/' + product_id)
        }
        else {
          alert("Order under Transaction!");
        }

      })
    }
    else {
      this.route.navigateByUrl('UserLogin')
    }
  }
}
