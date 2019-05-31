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
  @Input()
  set insertDataTmp(item: any) {
    // console.log(item);
    // if (item && this.editingAreaItemService.dom) {
    //   this.editingAreaItemService.dom.children = item.children;
    //   console.log(this.editingAreaItemService.dom);
    // }
  }
  @Output() public selectEditItem: EventEmitter<any> = new EventEmitter();
  @Output() public selectEditAreaBoxItem: EventEmitter<any> = new EventEmitter();
  savedRange: any;

  constructor(
    public editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {

  }
  // 获得焦点，设置插入标志位
  onBoxBlur(e: any) {
    // console.log(e);
    this.editingAreaItemService.boxDom = e;
    this.editingAreaItemService.insertIndex = e.index;
  }
  onItemFocus(e: any) {
    this.editingAreaItemService.elem = document.getElementById(e.id);
    this.editingAreaItemService.type = e.type;
    this.editingAreaItemService.imgUrl = e.url;
    this.editingAreaItemService.itemDom = e;
    this.selectEditItem.emit(true);
    if (e.isEdit) {
      e.isShowEditorTool = true;
    }
    return false;
  }
  selectEditBoxItem(value: any) {
    this.selectEditAreaBoxItem.emit(value);
  }
  onItemBlur(e: any) {
    // this.getCursortPosition();
    // setTimeout( () => {
    //   e.isShowEditorTool = false;
    // }, 200);
  }
  clickBtns(e: any) {
    // this.setCaretPosition();
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
