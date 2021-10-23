import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'app/shared/services/auth/business.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formers-list',
  templateUrl: './formers-list.component.html',
  styleUrls: ['./formers-list.component.scss'],
})
export class FormersListComponent implements OnInit {
  formerslist: any;
  districts: any;
  distId: any;
  formers: any;
  show: boolean = false;
  singlrfarmerdata: any;
  showviewfarmer: boolean = true;
  userId: any;
  approvestatus: any;
  personalInfo: any;
  farmersInfo: any;
  businessInfo: any;
  farmerData: any;

  text = "Approve";

  constructor(private business: BusinessService) {}

  ngOnInit(): void {
    this.getformersList();
    const distId = '2';
    this.business.DistrictFarmers(distId).subscribe((res) => {
      console.log('DistrictFarmers', res);
    });

    this.business.getmasterdata().subscribe((data) => {
      console.log('masterdata', data.response.districts);
      this.districts = data.response.districts;
    });
  }

  searchdistrict(q) {
    console.log('district', q);
    this.distId = q;
  }
  viewfarmerdetails(farmerInfo) {
    this.businessInfo = this.farmersInfo.businessInfo.find(
      (businessData) => businessData.userId === farmerInfo.userId
    );
    this.personalInfo = this.farmersInfo.personalInfo.find(
      (personalData) => personalData.userId === farmerInfo.userId
    );
    this.farmerData = farmerInfo;
    console.log(this.farmerData);
    this.showviewfarmer = false;
    // (this.userId = p.userId),
    //   (this.approvestatus = p.userApproveInfo.approveStatus);
    console.log('approve', this.approvestatus);
    // const obj = {
    //   userId: p.userId,
    // };
    // this.business.userprofile(obj).subscribe((res) => {
    //   console.log('userprofile', res);
    //   this.singlrfarmerdata = res;
    // });
  }
  serach() {
    const array = this.formerslist.filter((res) => {
      return res.district.distId === this.distId;
    });
    console.log('array', array);
    this.show = true;
    this.formers = array;
    console.log(this.formers);
  }
  getformersList() {
    this.business.farmersList().subscribe((resp) => {
      console.log(resp);
      console.log('API Worked');
      if (resp.status == 200) {
        this.farmersInfo = resp.response;
        this.formerslist = resp.response.farmer_info;
        console.log(this.farmersInfo);

        // console.log('certificate', resp.result[0].certificates[0].certificate);
      } else {
        console.log('code error');
      }
  
      if(resp.approveStatus == 1) {
        this.text = "Approved";
      }
      else {
        this.text = "Approve";
      }

    });
  }
  All() {
    this.getformersList();
    this.show = false;
  }
  back() {
    this.showviewfarmer = true;
  }
  approved() {
    // alert("you are Successfully approved...")
    const obj = {
      userId: this.personalInfo.userId ,
      approveStatus: '1',
    };
    console.log(this.personalInfo.userId)
    console.log('approveobj', obj);
    this.business.userapprove(obj).subscribe((res) => {

      if(res.status == 200) {
        Swal.fire({
          title: 'success',
          text: 'User approved successfully',
          icon: 'success',
        })
      }
      console.log('approve', res);
            
    });
    this.showviewfarmer = true;
    this.getformersList();
  }
}
