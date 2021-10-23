import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormersListComponent } from './formers-list/formers-list.component'


@NgModule({
  declarations: [DashboardComponent, FormersListComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedMaterialModule
  ]
})
export class BusinessModule { }
