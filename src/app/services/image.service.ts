import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
private query:string ; 
private API_KEY: string = environment.PIXAPAY_API_KEY; 
private API_URL : string = environment.PIXABAY_API_URL;
private URL: string = this.API_URL + this.API_KEY + '&q=';
private perpage:string = "&per_page=10";

  constructor(private _http:Http ) { }
    getImage(query){
        return this._http.get(this.URL + query + this.perpage)
        .map(res => res.json());
      }
}
 