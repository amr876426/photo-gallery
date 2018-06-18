import { GalleryService } from './../services/gallery.service'; 
import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  image:any;
  constructor(
  public route: ActivatedRoute ,
  public imageService:GalleryService) { }

  ngOnInit(){

let Params:any= this.route.snapshot.params; 
this.image = this.imageService.getImage(Params.id)  

}
} 
