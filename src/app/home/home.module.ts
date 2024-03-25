import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContactModule } from '../contact/contact.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { LatestYoutubeComponent } from './latest-youtube/latest-youtube.component';
import { PortfolioShortComponent } from './portfolio-short/portfolio-short.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    HomeComponent,
    LatestArticlesComponent,
    SummaryComponent,
    PortfolioShortComponent,
    LatestYoutubeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContactModule
  ]
})
export class HomeModule { }
