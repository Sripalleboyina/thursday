import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {Dashboard} from '../dashboard';
import { DataType } from 'igniteui-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dashboard:Dashboard;
status:boolean=false;
  constructor(private service:RegisterService) {this.dashboard=new Dashboard() 
  this.GetDashboard() }

  ngOnInit(): void {

     console.log("used credit="+this.dashboard.used_credit)
  }
GetDashboard(){
  this.service.GetEMIcardbyCustomerId(parseInt(this.service.customerId)).subscribe((data)=>{
    this.dashboard=data;
    console.log(this.dashboard.EMIcard_number);
    console.log(data)
     })
    }
  OnClickPayNow(OrderId){
    debugger;
    this.service.GetPayNowStatusByOrderId(OrderId).subscribe((data)=>{
      debugger;
      if(data)
      {
        this.service.GetEMIcardbyCustomerId(parseInt(this.service.customerId)).subscribe((data)=>{
          this.dashboard=data;
        })
      }
    })

  }

}
