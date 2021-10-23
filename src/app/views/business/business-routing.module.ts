import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormersListComponent } from './formers-list/formers-list.component';


const routes: Routes = [
  {
     path:'',
     children:[
      {path:"farmerslist",component:FormersListComponent,data:{title:"farmerslist",breadcrumb:"Farmers List"}},
      {path:"dashboard",component:DashboardComponent,data:{title:"dashboard",breadcrumb:"Dasboard"}},
     ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
