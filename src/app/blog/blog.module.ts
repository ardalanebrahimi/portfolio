import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { HighlightBlogsComponent } from './highlight-blogs/highlight-blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogPreviewComponent,
    HighlightBlogsComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
