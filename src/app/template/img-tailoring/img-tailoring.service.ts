import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgTailoringService {
cropUrl: any;
width: any;
constructor(private http: HttpClient) { }
getImg(url: any) {
  return this.http.get(url);
}

}
