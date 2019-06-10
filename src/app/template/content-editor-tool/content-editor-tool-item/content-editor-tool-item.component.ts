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
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);
  }
  italic() {
    document.execCommand('Italic', true);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);
  }
  slideLine() {
    document.execCommand('Underline', false);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);

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
    this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);
  }
  removeHyperlinks() {
    if (window.getSelection().toString().length > 0) {
      document.execCommand('Unlink', true);
      const content = this.getDom(this.editingAreaItemService.itemDom.id);
      this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);
      // alert('超链接解除成功');
    } else {
      alert('请选择解除超链接的位置');
    }
  }
  setfontColor(color: string, event: any) {
    event.stopPropagation();
    document.execCommand('ForeColor', true, color);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);
    this.contentEditorToolItemService.isFontColorDiv = false;
  }
  setBackgroundColor(color: string, event: any) {
    event.stopPropagation();
    document.execCommand('backColor', true, color);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);
    this.contentEditorToolItemService.isBackgroundColorDiv = false;
  }
  setFontSize(value: string, event: any) {
    event.stopPropagation();
    document.execCommand('FontSize', false, value);
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);
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
    this.editingAreaItemService.deleteTemplate();
  }
  onMoveUp() {
    if (this.editingAreaItemService.insertIndex !== 0) {
      // tslint:disable-next-line:max-line-length
      this.editingAreaItemService.items[this.editingAreaItemService.insertIndex] = this.editingAreaItemService.items.splice(this.editingAreaItemService.insertIndex - 1, 1, this.editingAreaItemService.items[this.editingAreaItemService.insertIndex])[0];
      for (let i = 0; i < this.editingAreaItemService.items.length; i++) {
        this.editingAreaItemService.items[i][this.editingAreaItemService.insertIndex] = i;
      }
      this.editingAreaItemService.insertIndex--;
      this.editingAreaItemService.base = 0;
      this.editingAreaItemService.idBase = 0;
      this.editingAreaItemService.sortIndex(this.editingAreaItemService.items);
    } else {
      alert('已经是第一位！');
    }
  }
  onMoveDown() {
    if (this.editingAreaItemService.insertIndex !== this.editingAreaItemService.items.length - 1) {
      // tslint:disable-next-line:max-line-length
      this.editingAreaItemService.items[this.editingAreaItemService.insertIndex] = this.editingAreaItemService.items.splice(this.editingAreaItemService.insertIndex + 1, 1, this.editingAreaItemService.items[this.editingAreaItemService.insertIndex])[0];
      for (let i = 0; i < this.editingAreaItemService.items.length; i++) {
        this.editingAreaItemService.items[i][this.editingAreaItemService.insertIndex] = i;
      }
      this.editingAreaItemService.insertIndex++;
      this.editingAreaItemService.base = 0;
      this.editingAreaItemService.idBase = 0;
      this.editingAreaItemService.sortIndex(this.editingAreaItemService.items);
    } else {
      alert('已经是最后一位！');
    }
  }
}
