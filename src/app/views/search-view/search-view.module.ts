import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SearchViewRoutingModule } from "./search-view-routing.module";
import { ResultPageComponent } from "./result-page/result-page.component";
import { MatCardModule } from "@angular/material/card";
import { SearchModule } from "app/shared/search/search.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedMaterialModule } from '../../shared/shared-material.module'

@NgModule({
  declarations: [ResultPageComponent],
  imports: [MatCardModule, CommonModule, NgxDatatableModule, SearchViewRoutingModule,SharedMaterialModule]
})
export class SearchViewModule {}
