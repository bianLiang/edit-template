import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EeitingAreaItem } from './eiting-area-item.model';
import { EditingAreaItemService } from './editing-area-item.service';

@Component({
  selector: 'bl-editing-area-item',
  templateUrl: './editing-area-item.component.html',
  styleUrls: ['./editing-area-item.component.css']
})
export class EditingAreaItemComponent implements OnInit {
  @Input() public item: EeitingAreaItem;
  savedRange: any;

  constructor(
    public editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {

  }
  // 获得焦点，设置插入标志位
  onBoxFocus(e: any) {
    this.editingAreaItemService.boxDom = e;
    this.editingAreaItemService.insertIndex = e.index;
  }
  onItemFocus(e: any) {
      this.editingAreaItemService.elem = document.getElementById(e.id);
      if (this.editingAreaItemService.isClick) {
        this.editingAreaItemService.type = e.type;
      }
      this.editingAreaItemService.imgUrl = e.url;
      this.editingAreaItemService.imgSize = e.imgSize;
      this.editingAreaItemService.imgHref = e.href;
      this.editingAreaItemService.itemDom = e;
      this.editingAreaItemService.isReUrl = false;
      if (e.isGroup) {
        this.editingAreaItemService.isGroup = e.isGroup;
      } else {
        this.editingAreaItemService.isGroup = false;
      }
      this.editingAreaItemService.hideEditorTool(this.editingAreaItemService.items);
      if (e.isEdit) {
        e.isShowEditorTool = true;
        return false;
      } else {
        return true;
      }
  }
  getDom(id: any) {
    return document.getElementById(id).innerHTML;
  }
  onItemKeyUp(e: any) {
    const that = this;
    setTimeout(() => {
      const content = that.getDom(that.editingAreaItemService.itemDom.id);
      that.editingAreaItemService.setContent(that.editingAreaItemService.items, that.editingAreaItemService.itemDom.id, content);
    }, 200);
  }
}
