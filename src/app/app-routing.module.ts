import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  // Add other routes for different sections/pages of your website
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
