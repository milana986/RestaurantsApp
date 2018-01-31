import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
  	SidebarComponent, 
  	HomeComponent, 
  	AboutComponent
  ],
  exports: [
    SidebarComponent
  ]   //ubaciti navbar il sta vec
})
export class CoreModule { }
