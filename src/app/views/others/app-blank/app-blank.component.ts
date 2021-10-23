import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessService } from 'app/shared/services/auth/business.service';

@Component({
  selector: 'app-blank',
  templateUrl: './app-blank.component.html',
  styleUrls: ['./app-blank.component.css']
})
export class AppBlankComponent implements OnInit {

  constructor(private business:BusinessService) { }
  // url ="https://www.postman.com/collections/bfc1b34356ae98fa3b9b"
  ngOnInit() {
    this.business.farmersList().subscribe(res=>{
      console.log("formers",res)
    })
    const distId= "2"
     this.business.DistrictFarmers(distId).subscribe(res=>{
       console.log("res",res)
     })

     this.business.getmasterdata().subscribe(data=>{
       console.log("masterdata",data)
     })
  }

}
