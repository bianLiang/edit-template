import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditingAreaItemService {
boxDom: any;
itemDom: any;
insertIndex: number;
type = 'txt';
imgUrl: any;
imgSize: any;
elem: any;
divDom = document.getElementById('editing-area');
constructor() { }

}
