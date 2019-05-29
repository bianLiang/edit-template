import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
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
  savedRange: any;
  dom: any;

  constructor(
    public editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
  }
  onItemFocus(e: any) {
    console.log(e);
    this.editingAreaItemService.dom = e;
    if (e.isEdit) {
      e.isShowEditorTool = true;
    }
  }
  onItemBlur(e: any) {
    this.getCursortPosition();
    setTimeout( () => {
      e.isShowEditorTool = false;
    }, 500);
  }
  clickBtns(e: any) {
    console.log(e);
    this.setCaretPosition();
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
