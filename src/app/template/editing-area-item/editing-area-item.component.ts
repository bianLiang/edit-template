import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EeitingAreaItem } from './eiting-area-item.model';
import { EditingAreaItemService } from './editing-area-item.service';

@Component({
  selector: 'bl-editing-area-item',
  templateUrl: './editing-area-item.component.html',
  styleUrls: ['./editing-area-item.component.css']
})
export class EditingAreaItemComponent implements OnInit {
  @ViewChild('editAreaItem', { static: false }) editAreaItem: EditingAreaItemComponent;
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
  onClickLineBox(e: any) {
    if (e.children[0].type === 'line') {
      this.editAreaItem.setEditBar.emit();
      this.editingAreaItemService.type = e.children[0].type;
      this.editingAreaItemService.boxDom = e;
      this.editingAreaItemService.itemDom = e.children[0];
      this.editingAreaItemService.elem = document.getElementById(e.children[0].id);
      this.editingAreaItemService.hideEditorTool(this.editingAreaItemService.items);
      if (e.children[0].isEdit) {
        e.children[0].isShowEditorTool = true;
      }
    }
  }
  // 获得焦点，设置插入标志位
  onBoxFocus(e: any) {
    this.setEditBar.emit();
    this.editingAreaItemService.boxDom = e;
    this.editingAreaItemService.insertIndex = e.index;
    // this.editingAreaItemService.type = 'box';
  }
  setEditBars() {
    this.setEditBarValue.emit();
  }
  onItemFocus(e: any, event: any) {
    // 向父级传递一个方法调用清楚文本编辑栏的值
    // event.stopPropagation();
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
  onItemKeyDown() {
    this.editingAreaItemService.isChange = false;
  }
  onItemKeyUp(e: any) {
    console.log(e);
    // e.target.innerText = '';
  }
  textFormat(e: any) {
    e.preventDefault();
    let text: any;
    const clp = (e.originalEvent || e).clipboardData;
    if (clp === undefined || clp === null) {
      // text = window.clipboardData.getData('text') || '';
      // if (text !== '') {
      //   if (window.getSelection) {
      //     const newNode = document.createElement('span');
      //     newNode.innerHTML = text;
      //     window.getSelection().getRangeAt(0).insertNode(newNode);
      //   } else {
      //     document.selection.createRange().pasteHTML(text)
      //   }
      // }
    } else {
      text = clp.getData('text/plain') || '';
      if (text !== '') {
        document.execCommand('insertText', false, text);
      }
    }
  }
}
