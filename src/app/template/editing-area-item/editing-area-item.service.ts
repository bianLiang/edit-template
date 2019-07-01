import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EeitingAreaItem } from './eiting-area-item.model';

@Injectable({
  providedIn: 'root'
})
export class EditingAreaItemService {
  isShowBorder = true;
  isClick = true;
  items: EeitingAreaItem[] = [];
  boxDom: any;
  itemDom: any;
  isGroup = false;
  isReUrl = false;
  insertIndex = 0;
  type: string;
  imgUrl: any;
  isNoUploading = false;
  imgSize: any;
  imgHref: any;
  elem: any;
  base = 0;
  idBase = 0;
  varBase = 0;
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
  // 初始循环渲染行内样式
  initialCyclel(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.initialCyclel(obj[i][key]);
        } else {
          if (key === 'content') {
            obj[i][key] = that.trustHtml(obj[i][key]);
          }
        }
      }
    }
  }
   // 结束循环还原初始样式
  endCyclels(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.endCyclels(obj[i][key]);
        } else {
          if (key === 'content') {
            obj[i][key] = that.transformationString(obj[i][key]);
          }
          if (key === 'isShowEditorTool') {
            obj[i][key] = false;
          }
        }
      }
    }
  }
  // 结束时处理隐藏所有的行内编辑器
  endHideCyclels(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.endHideCyclels(obj[i][key]);
        } else {
          if (key === 'isShowEditorTool') {
            obj[i][key] = false;
          }
        }
      }
    }
  }
  // 预览时处理数据、不可编辑
  previewCyclel(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.previewCyclel(obj[i][key]);
        } else {
          if (key === 'isEdit') {
            obj[i][key] = false;
          }
          if (key === 'isShowEditorTool') {
            obj[i][key] = false;
          }
        }
      }
    }
  }
  // 处理剪裁时其他模块不可编辑，不可上传新的图片
   cropCyclel(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.cropCyclel(obj[i][key]);
        } else {
          if (key === 'isEdit') {
            obj[i][key] = false;
          }
        }
      }
    }
    that.itemDom.isEdit = true;
    that.isNoUploading = true;
  }
  // 处理剪裁结束后数据
  endCropCyclel(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.endCropCyclel(obj[i][key]);
        } else {
          if (key === 'isEdit') {
            obj[i][key] = true;
          }
          // if (key === 'style') {
          //   obj[i][key]['pointer-events'] = 'auto';
          // }
        }
      }
    }
    that.isNoUploading = false;
  }
  // 排顺序
  sortIndex(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.sortIndex(obj[i][key]);
        } else {

          if (key === 'index') {
            obj[i][key] = that.base;
            that.base++;
          }
          if (key === 'id') {
            obj[i][key] = that.idBase;
            that.idBase++;
          }
        }
      }
    }
  }
  // 插入模板
  insertTemplate(dataTmp: any) {
    const that = this;
    that.base = 0;
    that.idBase = 0;
    const index = that.insertIndex;
    const htmlData = dataTmp;
    that.initialCyclel(htmlData);
    that.items.splice(index + 1, 0, htmlData);
    that.insertIndex++;
    that.sortIndex(that.items);
  }
  // 删除模板
  deleteTemplate() {
    this.base = 0;
    this.idBase = 0;
    const index = this.insertIndex;
    this.items.splice(index, 1);
    this.insertIndex--;
    this.sortIndex(this.items);
  }
  // 隐藏行内编辑器
  hideEditorTool(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.hideEditorTool(obj[i][key]);
        } else {
          if (key === 'isShowEditorTool') {
            obj[i][key] = false;
          }
        }
      }
    }
  }
  // 内容更改后重新复制
  setContent(obj: any, id: any, content: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.setContent(obj[i][key], id, content);
        } else {
          if (obj[i].id === id) {
            obj[i].content = that.trustHtml(content);
          }
        }
      }
    }
  }
}
