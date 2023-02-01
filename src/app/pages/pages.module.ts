import { CommonModule } from '@angular/common';
// Pages
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
// Modele Routing
import { RoutingModule } from './routing-module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PagesModule { }
