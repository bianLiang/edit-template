import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bl-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() public selectTmp: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClickText() {
    const data = {
      type: 'div',
      index: null,
      children: [
        {
          type: 'txt',
          id: 'txt',
          style: {
            // tslint:disable-next-line:object-literal-key-quotes
            'color': 'red',
            'margin': 0,
            'line-height': '35px'
          },
          content: '这是新增加的文本',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'delete']
        }
      ]
    };
    this.selectTmp.emit(data);
  }
  onClickBackgroundText() {
    const data = {
      type: 'div',
      index: null,
      children: [
        {
          type: 'txt',
          id: 'txt',
          style: {
            // tslint:disable-next-line:object-literal-key-quotes
            'background': 'red',
            'color': '#fff',
            'margin': 0,
            'line-height': '35px'
          },
          content: '这是新增加的文本',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'delete']
        }
      ]
    };
    this.selectTmp.emit(data);
  }
  onClickImg() {
    const data = {
      type: 'div',
      index: null,
      children: [
        {
          type: 'img',
          id: 'img',
          style: {
            'width': '400px',
            // 'padding': '5px',
            // 'margin': '2px 0',
            // 'border-radius': '5px'

          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['delete'],
          url: '../../../assets/img/bglogin.png',
          href: 'http://www.baidu.com',
          imgSize: '400px'
        }
      ]
    };
    this.selectTmp.emit(data);
  }
  onClickImgGroup() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'display': 'flex',
        'justify-content': 'space-evenly'
      },
      children: [
        {
          type: 'img',
          id: 'img',
          style: {
            'width': '250px',
          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['delete'],
          url: '../../../assets/img/bglogin.png',
          href: 'http://www.baidu.com',
          imgSize: '200px'

        },
        {
          type: 'img',
          id: 'img',
          style: {
            'width': '250px',
          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['delete'],
          url: '../../../assets/img/login1.png',
          href: 'http://www.baidu.com',
          imgSize: '200px'
        },
      ]
    };
    this.selectTmp.emit(data);
  }
  onClickButton() {
    const data = {
      type: 'div',
      index: null,
      children: [
        {
          type: 'button',
          id: 'button',
          style: {
            // tslint:disable-next-line:object-literal-key-quotes
            'background': 'red',
            // tslint:disable-next-line:object-literal-key-quotes
            'border': '1px solid #ccc',
            'color': '#fff',
            'padding': '5px',
            'margin': '2px 0',
            'border-radius': '5px',
            'outline-color': 'blue'
          },
          content: '立即点击',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'delete']
        }
      ]
    };
    this.selectTmp.emit(data);
  }

}
