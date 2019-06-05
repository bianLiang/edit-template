import { Component, OnInit, SecurityContext } from '@angular/core';
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
  idBase = 0;
  fn: any;
  items: EeitingAreaItem[] = [
    // {
    //   type: 'div',
    //   index: 0,
    //   style: {
    //     // 'width': '100%',
    //     // 'background-color': '#fff',
    //     // 'text-align': 'center',
    //   },
    //   children: [
    //     {
    //       type: 'txt',
    //       id: 'txt0',
    //       style: {
    //         'margin': 0,
    //         'color': 'blue',
    //         'line-height': '35px',
    //         'outline-color': 'blue',
    //         'font-weight': 400
    //       },
    //       content: '小时不识月，呼作白玉盘。',
    //       isEdit: true,
    //       isShowEditorTool: false,
    //       toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'fontSize', 'delete']
    //     }
    //   ]
    // },
    // {
    //   type: 'div',
    //   index: 1,
    //   children: [
    //     {
    //       type: 'button',
    //       id: 'button1',
    //       style: {
    //         // tslint:disable-next-line:object-literal-key-quotes
    //         'background': '#fff',
    //         // tslint:disable-next-line:object-literal-key-quotes
    //         'border': '1px solid #ccc',
    //         'color': 'red',
    //         'padding': '5px',
    //         'margin': '2px 0',
    //         'border-radius': '5px',
    //         'outline-color': 'blue'
    //       },
    //       content: '立即点击',
    //       isEdit: true,
    //       isShowEditorTool: false,
    //       toolConfigure: ['bold', 'italic', 'slideLine', 'fontColor', 'backgroundColor', 'fontSize', 'delete']
    //     }
    //   ]
    // },
    // {
    //   type: 'div',
    //   index: 2,
    //   children: [
    //     {
    //       type: 'img',
    //       id: 'img2',
    //       style: {
    //         'width': '400px',
    //         'outline-color': 'blue'

    //       },
    //       isEdit: true,
    //       isShowEditorTool: false,
    //       toolConfigure: ['delete'],
    //       url: '../../../assets/img/bglogin.png',
    //       href: 'http://www.baidu.com',
    //       imgSize: '400px'

    //     }
    //   ]
    // },
    // {
    //   type: 'div',
    //   index: 3,
    //   style: {
    //     // 'width': '100%',
    //     // 'background-color': '#fff',
    //     // 'text-align': 'center',
    //   },
    //   children: [
    //     {
    //       type: 'txt',
    //       id: 'txt3',
    //       style: {
    //         'margin': 0,
    //         'line-height': '35px',
    //         'outline-color': 'blue',
    //         'font-weight': 400
    //       },
    //       content: '小时不识月， 呼作白玉盘。',
    //       isEdit: true,
    //       isShowEditorTool: false,
    //       toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'fontSize', 'delete']
    //     }
    //   ]
    // },
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
    private editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
    const that = this;
    that.initialCyclel(that.items);
    that.base = 0;
    that.idBase = 0;
    that.sortIndex(that.items);
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
  initialCyclel(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.initialCyclel(obj[i][key]);
        } else {
          if (key === 'content') {
            obj[i][key] = that.editingAreaItemService.trustHtml(obj[i][key]);
          }
        }
      }
    }
  }
  initialCyclels(obj: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.initialCyclels(obj[i][key]);
        } else {
          if (key === 'content') {
            obj[i][key] = that.editingAreaItemService.transformationString(obj[i][key]);
          }
        }
      }
    }
  }
  save() {
    this.initialCyclels(this.items);
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
            obj[i][key] = that.idBase;
            that.idBase++;
          }
        }
      }
    }
  }
  selectTmp(dataTmp: any) {
    const that = this;
    that.base = 0;
    that.idBase = 0;
    const index = that.editingAreaItemService.insertIndex;
    const htmlData = dataTmp;
    that.initialCyclel(htmlData);
    that.items.splice(index + 1, 0, htmlData);
    that.editingAreaItemService.insertIndex++;
    that.sortIndex(that.items);
  }
  deleteTemps() {
    this.base = 0;
    this.idBase = 0;
    const index = this.editingAreaItemService.insertIndex;
    this.items.splice(index, 1);
    this.editingAreaItemService.insertIndex--;
    this.sortIndex(this.items);
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
    this.sortIsShowEditorTool(this.items);
  }
  setContents(obj: any, id: any, content: any) {
    const that = this;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      for (const key in obj[i]) {
        if (Array.isArray(obj[i][key])) {
          that.setContents(obj[i][key], id, content);
        } else {
          if (obj[i].id === id) {
            obj[i].content = that.editingAreaItemService.trustHtml(content);
          }
        }
      }
    }
  }
  setContent(content: any) {
    this.setContents(this.items, this.editingAreaItemService.itemDom.id, content);
  }

}
