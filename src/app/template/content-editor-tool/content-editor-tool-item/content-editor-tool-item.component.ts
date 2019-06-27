import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { typefaces, fontColor } from '../../edit-bar/edit-bar-data';
import { ContentEditorToolItemService } from './content-editor-tool-item.service';
import { EditingAreaItemService } from '../../editing-area-item/editing-area-item.service';
import { NzModalService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
import { ImgTailoringService } from '../../img-tailoring/img-tailoring.service';
@Component({
  selector: 'bl-content-editor-tool-item',
  templateUrl: './content-editor-tool-item.component.html',
  styleUrls: ['./content-editor-tool-item.component.css']
})
export class ContentEditorToolItemComponent implements OnInit {
  @Input() public toolItem: any;
  fontColor = fontColor;
  isFontColorDiv = false;
  isBackgroundColorDiv = false;
  isFontSizeDiv = false;
  savedRange: any;
  constructor(
    public contentEditorToolItemService: ContentEditorToolItemService,
    public editingAreaItemService: EditingAreaItemService,
    private modalService: NzModalService,
    private message: NzMessageService,
    public imgTailoringService: ImgTailoringService
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
            this.message.create('error', `请输入http或https开头的链接`);
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
          this.message.create('error', `请输入http或https开头的链接`);
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
      this.message.create('error', `请选择解除超链接的位置`);
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
    this.modalService.confirm({
      nzTitle: '确定删除此块?',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {
        this.editingAreaItemService.deleteTemplate();
      },
      nzCancelText: '取消',
      nzOnCancel: () => { }
    });
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
      this.message.create('warning', `已经是第一位！`);
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
      this.message.create('warning', `已经是最后一位！`);
    }
  }
  crop() {
    // this.editingAreaItemService.cropCyclel(this.editingAreaItemService.items);
    this.editingAreaItemService.itemDom.isCrop = true;
    this.imgTailoringService.cropUrl = this.editingAreaItemService.itemDom.url;
  }
  // 获得光标信息
  getCursortPosition() {
    // if (window.getSelection) {
    //   this.savedRange = window.getSelection().getRangeAt(0);
    // }
    let caretOffset = 0;
    // tslint:disable-next-line:max-line-length
    const doc = document.getElementById(this.editingAreaItemService.itemDom.id).ownerDocument;
    const win = doc.defaultView;
    let sel;
    if (typeof win.getSelection !== 'undefined') {
      sel = win.getSelection();
      if (sel.rangeCount > 0) {
        const range = win.getSelection().getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(document.getElementById(this.editingAreaItemService.itemDom.id));
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
        this.savedRange = caretOffset;
        console.log(this.savedRange);
      }
    }
  }
  // 设置光标
  setCaretPosition() {
    // if (this.savedRange !== null) {
    //   if (window.getSelection) {
    //     const s = window.getSelection();
    //     if (s.rangeCount > 0) {
    //       s.removeAllRanges();
    //       s.addRange(this.savedRange);
    //     }
    //   } else if (document.createRange) {
    //     window.getSelection().addRange(this.savedRange);
    //   }
    // }

    const element: any = document.getElementById('my-var-' + this.editingAreaItemService.varBase);
    // let range;
    // let selection;
    // if (document.createRange) {
    //   range = document.createRange();
    //   range.selectNodeContents(element);
    //   console.log(element.innerHTML);
    //   if (element.innerHTML.length > 0) {
    //     console.log(element.childNodes);
    //     range.setStart(element.childNodes[0], this.savedRange + 7);
    //   }
    //   range.collapse(true);
    //   selection = window.getSelection();
    //   selection.removeAllRanges();
    //   selection.addRange(range);
    // }
    console.log(element);
    if (element.setSelectionRange) {
      element.focus();
      element.setSelectionRange(7, 7);
      // IE8 and below
    } else if (element.createTextRange) {
      const range = element.createTextRange();
      range.collapse(true);
      range.moveEnd('character', 7);
      range.moveStart('character', 7);
      range.select();
    }
  }
  insert() {
    const that = this;
    this.getCursortPosition();
    // document.execCommand('insertHTML', false, '<span style="color:#ccc;">$$data.自定义变量名称$$</span>');
    // tslint:disable-next-line:max-line-length
    document.execCommand('insertHTML', false, '<input id="my-var-' + that.editingAreaItemService.varBase + '" value="$$data.自定义变量名称$$" style="background: rgb(0,150,136);color:#fff;border: none;">');
    const content = this.getDom(this.editingAreaItemService.itemDom.id);
    this.editingAreaItemService.setContent(this.editingAreaItemService.items, this.editingAreaItemService.itemDom.id, content);
    setTimeout(() => {
      that.setCaretPosition();
      that.editingAreaItemService.varBase++;
    }, 1000);
  }
}
