import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { error } from 'protractor';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  constructor( private sss:ImageService) { }
images:any[];
imagesFound: boolean = false;
searching:boolean= false;
  ngOnInit() {
  }
  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error);
  }
  searchImages(query:string){
    this.searching= true;
    return this.sss.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching= false 
    )
  }

}
