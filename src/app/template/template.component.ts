import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EeitingAreaItem } from './editing-area-item/eiting-area-item.model';
import { EditingAreaItemService } from './editing-area-item/editing-area-item.service';

@Component({
  selector: 'bl-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  insertDataTmp: any;
  base = 0;
  fn: any;
  items: EeitingAreaItem[] = [
    {
      type: 'div',
      index: 0,
      style: {
        // 'width': '100%',
        // 'background-color': '#fff',
        // 'text-align': 'center',
      },
      children: [
        {
          type: 'txt',
          id: 'txt0',
          style: {
            'margin': 0,
            'line-height': '35px',
            'outline-color': 'blue'
          },
          content: '小时不识月， 呼作白玉盘。',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'fontSize']
        }
      ]
    },
    {
      type: 'div',
      index: 1,
      children: [
        {
          type: 'button',
          id: 'button1',
          style: {
            // tslint:disable-next-line:object-literal-key-quotes
            'background': '#fff',
            // tslint:disable-next-line:object-literal-key-quotes
            'border': '1px solid #ccc',
            'color': 'red',
            'padding': '5px',
            'margin': '2px 0',
            'border-radius': '5px',
            'outline-color': 'blue'
          },
          content: '立即点击',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'fontColor', 'backgroundColor', 'fontSize']
        }
      ]
    },
    {
      type: 'div',
      index: 2,
      children: [
        {
          type: 'img',
          id: 'img2',
          style: {
            'width': '400px',
            // 'padding': '5px',
            // 'margin': '2px 0',
            // 'border-radius': '5px'

          },
          isEdit: false,
          url: '../../../assets/img/bglogin.png',
          href: 'http://www.baidu.com',

        }
      ]
    },
    {
      type: 'div',
      index: 3,
      style: {
        // 'width': '100%',
        // 'background-color': '#fff',
        // 'text-align': 'center',
      },
      children: [
        {
          type: 'txt',
          id: 'txt3',
          style: {
            'margin': 0,
            'line-height': '35px',
            'outline-color': 'blue'
          },
          content: '小时不识月， 呼作白玉盘。',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'fontSize']
        }
      ]
    },
  ];
  editBarConfigure = [
    {
      name: 'typefaces',
      typefacesList: [
        { name: '宋体', code: 'SimSun' },
        { name: '黑体', code: 'SimHei' },
        { name: '微软雅黑', code: 'Microsoft YaHei' },
        { name: '微软正黑体', code: 'Microsoft JhengHei' },
        { name: '新宋体', code: 'NSimSun' },
        { name: '新细明体', code: 'PMingLiU' },
        { name: '细明体', code: 'MingLiU' },
        { name: '标楷体', code: 'DFKai-SB' },
        { name: '仿宋', code: 'FangSong' },
        { name: '楷体', code: 'KaiTi' }
      ],
      isShow: true,
      typefacesStyle: {
        'border-radius': '5px',
        'outline': 'none',
        'width': '150px',
        'height': '30px'
      }
    },
    {
      name: 'fontSize',
      isShow: true,
      fontSizeStyle: {
        'width': '110px',
       },
      maximumInterval: 30,
    }
  ];
  constructor(
    private sanitizer: DomSanitizer,
    private editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
    const that = this;
    that.initialCyclel(that.items);
    // that.fn = (event: any) => {
    //   const div = document.getElementById('editing-area');
    //   const e = event || window.event;
    //   const y1 = div.offsetTop;
    //   const y2 = y1 + div.offsetHeight;
    //   const x1 = div.offsetLeft;
    //   const x2 = x1 + div.offsetWidth;
    //   const x = e.clientX;
    //   const y = e.clientY;
    //   if ( x < x1 || x > x2 || y < y1 || y > y2) {
    //     that.sortIsShowEditorTool(that.items);
    //   }
    // };
    // document.addEventListener('click', that.fn, true);

    // document.addEventListener('click', (event: any) => {
    //   const e = event || window.event;
    //   const y1 = div.offsetTop;
    //   const y2 = y1 + div.offsetHeight;
    //   const x1 = div.offsetLeft;
    //   const x2 = x1 + div.offsetWidth;
    //   const x = e.clientX;
    //   const y = e.clientY;
    //   if ( x < x1 || x > x2 || y < y1 || y > y2) {
    //     that.sortIsShowEditorTool(that.items);
    //   }
    // }, false);
  }
  trustHtml(str: string) {
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }
  initialCyclel(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.initialCyclel(obj[i][key]);
        } else {
          if (key === 'content') {
            obj[i][key] = that.trustHtml(obj[i][key]);
          }
        }
      }
    }
  }
  sortIndex(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.sortIndex(obj[i][key]);
        } else {

          if (key === 'index') {
            obj[i][key] = that.base;
            that.base++;
          }
          if (key === 'id') {
            obj[i][key] = that.base;
          }
        }
      }
    }
  }
  selectTmp(dataTmp: any) {
    const that = this;
    that.base = 0;
    if (that.editingAreaItemService.insertIndex !== undefined) {
      const index = that.editingAreaItemService.insertIndex;
      const htmlData = dataTmp;
      that.initialCyclel(htmlData);
      that.items.splice(index + 1, 0, htmlData);
      that.editingAreaItemService.insertIndex = null;
      that.sortIndex(that.items);
    } else {
      alert('请选择插入位置');
    }
  }
  sortIsShowEditorTool(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.sortIsShowEditorTool(obj[i][key]);
        } else {

          if (key === 'isShowEditorTool') {
            obj[i][key] = false;
          }
        }
      }
    }
  }
  selectItem(value: any) {
    const that = this;
    this.sortIsShowEditorTool(this.items);
  }

}
