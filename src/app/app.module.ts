import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LatestArticlesComponent } from './home/latest-articles/latest-articles.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { SummaryComponent } from './home/summary/summary.component';
import { PortfolioShortComponent } from './home/portfolio-short/portfolio-short.component';
import { LatestYoutubeComponent } from './home/latest-youtube/latest-youtube.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LatestArticlesComponent,
    AboutComponent,
    PortfolioComponent,
    ArticlesComponent,
    ContactComponent,
    SummaryComponent,
    PortfolioShortComponent,
    LatestYoutubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
