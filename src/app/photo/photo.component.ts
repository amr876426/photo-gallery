import { GalleryService } from '../services/gallery.service';
 import { Component, OnInit, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnChanges {
 
  images:any[];
  visableImages:any[]= [];
  @Input() filterBy?:string= 'all';
  constructor( public imageService:GalleryService)  { 
    this.visableImages = this.imageService.getImages(); 
  }

ngOnChanges(){
  this.visableImages = this.imageService.getImages();
} 

}
