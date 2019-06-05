import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class EditingAreaItemService {
boxDom: any;
itemDom: any;
insertIndex = 0;
type = 'txt';
imgUrl: any;
imgSize: any;
imgHref: any;
elem: any;
divDom = document.getElementById('editing-area');
constructor(
  public sanitizer: DomSanitizer,
) { }
  trustHtml(str: string) {
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }
  transformationString(content: any) {
    return this.sanitizer.sanitize(SecurityContext.HTML, content);
  }
}
