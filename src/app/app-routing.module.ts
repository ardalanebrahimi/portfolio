import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', loadChildren: () => import('src/app/contact/contact.module').then((m) => m.ContactModule) },
  { path: 'blog', loadChildren: () => import('src/app/blog/blog.module').then((m) => m.BlogModule) },
  { path: 'home', loadChildren: () => import('src/app/home/home.module').then((m) => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
