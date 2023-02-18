import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
// Pages
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
// Modele Routing
import { RoutingModule } from './routing-module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
