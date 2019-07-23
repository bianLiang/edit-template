import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImgTailoringService {
scrollTop = 0;
cropUrl: any;
width: any;
height = '64px';
constructor(private http: HttpClient) { }
getImg(url: any) {
  return this.http.get(url);
}

}
