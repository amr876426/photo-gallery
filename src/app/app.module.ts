import { NavComponent } from './nav/nav.component';
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';
import { ImageService } from './services/image.service';
import { GalleryService } from './services/gallery.service'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component'; 
import { RouterModule, Routes } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component'; 

import { FilterPipe } from './filter.pipe';
const routes: Routes = [
  { path: '', component: ImageListComponent }, 
  { path: 'photo', component: PhotoComponent }, 
  { path: 'image', component: DetailComponent }, 
]; 

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent ,  
    HomeComponent,
    PhotoComponent,
    NavComponent,
    DetailComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ImageService , GalleryService ,FilterPipe] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
