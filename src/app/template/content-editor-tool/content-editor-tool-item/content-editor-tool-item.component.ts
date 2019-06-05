import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { typefaces, fontColor } from '../../edit-bar/edit-bar-data';
import { ContentEditorToolItemService } from './content-editor-tool-item.service';
import { EditingAreaItemService } from '../../editing-area-item/editing-area-item.service';
@Component({
  selector: 'bl-content-editor-tool-item',
  templateUrl: './content-editor-tool-item.component.html',
  styleUrls: ['./content-editor-tool-item.component.css']
})
export class ContentEditorToolItemComponent implements OnInit {
  @Input() public toolItem: any;
  @Output() public clickBtn: EventEmitter<any> = new EventEmitter();
  @Output() public deleteTem: EventEmitter<any> = new EventEmitter();
  @Output() public setContent: EventEmitter<any> = new EventEmitter();
  fontColor =  fontColor;
  isFontColorDiv = false;
  isBackgroundColorDiv = false;
  isFontSizeDiv = false;
  constructor(
    public contentEditorToolItemService: ContentEditorToolItemService,
    public editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
  }
  getDom(id: any) {
    return document.getElementById(id).innerHTML;
  }

  bold() {
    document.execCommand('Bold', true);
    this.clickBtn.emit(true);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.setContent.emit(content);
  }
  italic() {
    document.execCommand('Italic', true);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.setContent.emit(content);
  }
  slideLine() {
    document.execCommand('Underline', false);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.setContent.emit(content);
  }
  addLink() {
    const userSelection = window.getSelection();
    const range = userSelection.getRangeAt(0);
    const div = document.createElement('div');
    div.appendChild(range.cloneContents());
    const obj = document.getElementById('aaabbcc');
    const reg = /\<\/?a\>/gim;
      // window.getSelection().parentNode.nodeName === 'A'
    if (
      reg.test(div.innerHTML) === true
    ) {
      if (confirm('选择文字中已存在超链接!是否继续操作？')) {
        const linkURL = prompt('请选中页面内容填写链接地址:', 'http://');
        const ipReg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
        const result = ipReg.test(linkURL);
        if (result) {
          const sText = document.getSelection();
          document.execCommand('createLink', true, linkURL);
          sText.anchorNode.parentElement.title = linkURL;
          sText.anchorNode.parentElement['target'] = '_blank';
        } else {
          if (linkURL) {
            alert('请输入http或https开头的链接');
          } else {
            return false;
          }
        }
      }
    } else {
      const linkURL = prompt('请选中页面内容填写链接地址:', 'http://');
      const ipReg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
      const result = ipReg.test(linkURL);
      if (result) {
        const sText = document.getSelection();
        document.execCommand('createLink', true, linkURL);
        sText.anchorNode.parentElement.title = linkURL;
        sText.anchorNode.parentElement['target'] = '_blank';
      } else {
        if (linkURL) {
          alert('请输入http或https开头的链接');
        } else {
          return false;
        }
      }
    }
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.setContent.emit(content);
  }
  removeHyperlinks() {
    if (window.getSelection().toString().length > 0) {
      document.execCommand('Unlink', true);
      const content = this.getDom(this.editingAreaItemService.itemDom.id);
      this.setContent.emit(content);
      // alert('超链接解除成功');
    } else {
      alert('请选择解除超链接的位置');
    }
  }
  setfontColor(color: string, event: any) {
    event.stopPropagation();
    document.execCommand('ForeColor', true, color);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.setContent.emit(content);
    this.contentEditorToolItemService.isFontColorDiv = false;
  }
  setBackgroundColor(color: string, event: any) {
    event.stopPropagation();
    document.execCommand('backColor', true, color);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.setContent.emit(content);
    this.contentEditorToolItemService.isBackgroundColorDiv = false;
  }
  setFontSize(value: string, event: any) {
    event.stopPropagation();
    document.execCommand('FontSize', false, value);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.setContent.emit(content);
    this.contentEditorToolItemService.isFontSizeDiv = false;
  }
  showIsFontColorDiv(event: any) {
    this.contentEditorToolItemService.isBackgroundColorDiv = false;
    this.contentEditorToolItemService.isFontSizeDiv = false;
    this.contentEditorToolItemService.isFontColorDiv = true;
  }
  showIsBackgroundColorDiv(event: any) {
    this.contentEditorToolItemService.isBackgroundColorDiv = true;
    this.contentEditorToolItemService.isFontColorDiv = false;
    this.contentEditorToolItemService.isFontSizeDiv = false;
  }
  showIsFontSizeDiv(event: any) {
    this.contentEditorToolItemService.isFontSizeDiv = true;
    this.contentEditorToolItemService.isBackgroundColorDiv = false;
    this.contentEditorToolItemService.isFontColorDiv = false;
  }
  delete() {
    this.deleteTem.emit();
  }

}
