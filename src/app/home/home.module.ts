import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { NewsComponent } from './news/news.component';
import { InfoComponent } from './info/info.component';
import { CuriositiesComponent } from './curiosities/curiosities.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, NewsComponent, InfoComponent, CuriositiesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
