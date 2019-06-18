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
  onItemBlur(e: any) {
    // this.getCursortPosition();
    // setTimeout( () => {
    //   e.isShowEditorTool = false;
    // }, 200);
  }
  // 获得光标信息
  getCursortPosition() {
    if (window.getSelection) {
      this.savedRange = window.getSelection().getRangeAt(0);
    }
  }
  // 设置光标
  setCaretPosition() {
    // document.getElementById('text').focus();
    if (this.savedRange !== null) {
        if (window.getSelection) {
            const s = window.getSelection();
            if (s.rangeCount > 0) {
              s.removeAllRanges();
              s.addRange(this.savedRange);
            }
        } else if (document.createRange) {
            window.getSelection().addRange(this.savedRange);
          }
    }
  }


}
