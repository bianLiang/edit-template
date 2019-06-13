import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EditingAreaItemService } from '../editing-area-item/editing-area-item.service';

@Component({
  selector: 'bl-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
   isText = true;
   isBackgroundText = true;
   isImg = true;
   isImgGroup = true;
   isImgText = true;
   isBackgroundImgText = true;
   isCode = true;
   isButton = true;
   isLine = true;
   isHead = true;
   isFoot = true;
   isShare = true;
  @Input()
  set toolBarConfigure(value: any) {
    if (value) {
      if (value.indexOf('text') !== -1) {
        this.isText = true;
      } else {
        this.isText = false;
      }
      if (value.indexOf('backgroundText') !== -1) {
        this.isBackgroundText = true;
      } else {
        this.isBackgroundText = false;
      }
      if (value.indexOf('img') !== -1) {
        this.isImg = true;
      } else {
        this.isImg = false;
      }
      if (value.indexOf('imgGroup') !== -1) {
        this.isImgGroup = true;
      } else {
        this.isImgGroup = false;
      }
      if (value.indexOf('imgText') !== -1) {
        this.isImgText = true;
      } else {
        this.isImgText = false;
      }
      if (value.indexOf('backgroundImgText') !== -1) {
        this.isBackgroundImgText = true;
      } else {
        this.isBackgroundImgText = false;
      }
      if (value.indexOf('code') !== -1) {
        this.isCode = true;
      } else {
        this.isCode = false;
      }
      if (value.indexOf('button') !== -1) {
        this.isButton = true;
      } else {
        this.isButton = false;
      }
      if (value.indexOf('line') !== -1) {
        this.isLine = true;
      } else {
        this.isLine = false;
      }
      if (value.indexOf('head') !== -1) {
        this.isHead = true;
      } else {
        this.isHead = false;
      }
      if (value.indexOf('foot') !== -1) {
        this.isFoot = true;
      } else {
        this.isFoot = false;
      }
      if (value.indexOf('share') !== -1) {
        this.isShare = true;
      } else {
        this.isShare = false;
      }
    }
  }
  constructor(
    private editingAreaItemService: EditingAreaItemService,
  ) { }

  ngOnInit() {
  }
  onClickText() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'margin': '5px 0'
      },
      children: [
        {
          type: 'txt',
          id: 'txt',
          style: {
            'color': 'red',
            'margin': 0,
            'line-height': '35px',
            'outline-color': 'blue'
          },
          content: '这是新增加的文本',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'txt';
  }
  onClickBackgroundText() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'margin': '5px 0'
      },
      children: [
        {
          type: 'txt',
          id: 'txt',
          style: {
            'outline-color': 'blue',
            'background': 'red',
            'color': '#fff',
            'margin': 0,
            'line-height': '35px'
          },
          content: '这是新增加的文本',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'txt';
  }
  onClickImg() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'display': 'flex',
        'justify-content': 'center',
        'margin': '5px 0'
      },
      children: [
        {
          type: 'img',
          id: 'img',
          style: {
            'width': '100%',
            'outline-color': 'blue',
          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['moveUp', 'moveDown', 'delete'],
          url: '../../../assets/img/bglogin.png',
          href: '',
          imgSize: '宽650px'
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'img';
  }
  onClickImgGroup() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'display': 'flex',
        'justify-content': 'space-evenly',
        'margin': '5px 0'
      },
      children: [
        {
          type: 'img',
          id: 'img',
          style: {
            'width': '250px',
            'outline-color': 'blue',
          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['moveUp', 'moveDown', 'delete'],
          url: '../../../assets/img/bglogin.png',
          href: '',
          imgSize: '宽250px'

        },
        {
          type: 'img',
          id: 'img',
          style: {
            'width': '250px',
            'outline-color': 'blue',
          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['moveUp', 'moveDown', 'delete'],
          url: '../../../assets/img/login1.png',
          href: '',
          imgSize: '宽250px'
        },
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'img';
  }
  onClickButton() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'margin': '5px 0',
        'text-align': 'center'
      },
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
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'txt';
  }
  onClickImgText() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'display': 'flex',
        'justify-content': 'space-evenly',
        'margin': '5px 0'
      },
      children: [
        {
          type: 'img',
          id: 'img',
          style: {
            'width': '250px',
            'outline-color': 'blue',
          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['moveUp', 'moveDown', 'delete'],
          url: '../../../assets/img/bglogin.png',
          href: '',
          imgSize: '宽250px'

        },
        {
          type: 'txt',
          id: 'txt',
          style: {
            'outline-color': 'blue',
            'color': 'red',
            'margin': 0,
            'margin-left': '10px',
            'line-height': '35px'
          },
          content: '这是新增加的文本段落,这是新增加的文本段落,这是新增加的文本段落,这是新增加的文本段落。',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'txt';
  }

  onClickBackgroundImgText() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'background': '#eee',
        'text-align': 'center',
        'margin': '5px 0'
      },
      children: [
        {
          type: 'img',
          id: 'img',
          style: {
            'width': '250px',
            'outline-color': 'blue',
          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['moveUp', 'moveDown', 'delete'],
          url: '../../../assets/img/bglogin.png',
          href: '',
          imgSize: '宽250px'

        },
        {
          type: 'txt',
          id: 'txt',
          style: {
            'outline-color': 'blue',
            'color': 'red',
            'margin': 0,
            'line-height': '35px'
          },
          content: '这是新增加的文本段落,这是新增加的文本段落,这是新增加的文本段落,这是新增加的文本段落。',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'txt';
  }
  onClickLine() {
    const data = {
      type: 'div',
      index: null,
      style: {
        // 'margin': '5px 0'
      },
      children: [
        {
          type: 'txt',
          id: 'txt',
          style: {
            'background': '#eee',
            'text-align': 'center',
            'height': '1px',
            'border-bottom': '1px solid #333',
            'margin': '0'
          },
          content: '',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'txt';
  }
  onClickhead() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'margin': '5px 0'
      },
      children: [
        {
          type: 'txt',
          id: 'txt',
          style: {
            'margin': 0,
            'line-height': '35px',
            'outline-color': 'blue'
          },
          content: '图片无法正常显示，请点击<a href="{{edm_cannot_read}}" target="_blank">在线预览</a>',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'txt';
  }
  onClickfoot() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'margin': '5px 0'
      },
      children: [
        {
          type: 'txt',
          id: 'txt',
          style: {
            'margin': 0,
            'line-height': '35px',
            'outline-color': 'blue',
            'text-align': 'center',
            'font-weight': '400',
            'color': '#888'
          },
          content: '您之所以收到这封邮件，是因为您曾经与我们沟通或在官网订阅此邮件；<br> 如果您想将我们的信息分享给更多的朋友，请分享或转发；<br> 为了您不错过我们的每一次专享资讯，请将我们的发件人地址加到通讯录<br> 本电子邮件由系统自动发送，请勿直接回复。如有任何意见或建议，请您联系我们。<br> 若您不希望再次收到来自我们的邮件，<a href="{{edm_unsubscribe_url}}" target="_blank">请点此退订</a>。',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.type = 'txt';
  }
  onClickCode() {
    const data = {
      type: 'div',
      index: null,
      style: {
        'display': 'flex',
        'justify-content': 'center',
        'margin': '5px 0',
        'flex-direction': 'column',
        'text-align': 'center'
      },
      children: [
        {
          type: 'code',
          id: 'code',
          style: {
            'width': '200px',
            'outline-color': 'blue',
          },
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['moveUp', 'moveDown', 'delete'],
          url: '../../../assets/img/code.jpg',
          imgSize: '宽200px * 长200px'

        },
        {
          type: 'txt',
          id: 'txt',
          style: {
            'outline-color': 'blue',
            'color': 'red',
            'margin': 0,
            'margin-left': '10px',
            'line-height': '35px'
          },
          content: '扫码关注',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
        }
      ]
    };
    this.editingAreaItemService.insertTemplate(data);
    // this.editingAreaItemService.imgUrl = '../../../assets/img/code.jpg';
    // this.editingAreaItemService.type = 'code';
  }
  onClickShare() {
    alert('暂时不支持添加此模块！');
  }
}
