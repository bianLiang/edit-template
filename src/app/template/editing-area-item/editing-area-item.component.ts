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
  @Output() public setEditBar: EventEmitter<any> = new EventEmitter();
  @Output() public setEditBarValue: EventEmitter<any> = new EventEmitter();
  savedRange: any;
  savedRangeIndex: any;
  doc: any;

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
  setEditBars() {
    this.setEditBarValue.emit();
  }
  onItemFocus(e: any, event: any) {
    // 向父级传递一个方法调用清楚文本编辑栏的值
    this.setEditBar.emit();
    this.editingAreaItemService.elem = document.getElementById(e.id);
    // this.editingAreaItemService.Y = event.clientY;

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
}
