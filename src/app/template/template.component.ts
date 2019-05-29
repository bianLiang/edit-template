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
          style: {
            'margin': 0,
            'line-height': '35px'
          },
          content: '小时不识月， 呼作白玉盘。',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine']
        }
      ]
    },
    {
      type: 'div',
      index: 1,
      children: [
        {
          type: 'button',
          style: {
            // tslint:disable-next-line:object-literal-key-quotes
            'background': '#fff',
            // tslint:disable-next-line:object-literal-key-quotes
            'border': '1px solid #ccc',
            'color': 'red',
            'padding': '5px',
            'margin': '2px 0',
            'border-radius': '5px'
          },
          content: '立即点击',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine']
        }
      ]
    }
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
    }
  ];
  constructor(
    private sanitizer: DomSanitizer,
    private editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
    this.initialCyclel(this.items);
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
        }
      }
    }
  }
  selectTmp(dataTmp: any) {
    this.base = 0;
    console.log(this.editingAreaItemService.insertIndex);
    if (this.editingAreaItemService.insertIndex !== undefined) {
      const index = this.editingAreaItemService.insertIndex;
      const htmlData = dataTmp;
      this.initialCyclel(htmlData);
      this.items.splice(index + 1, 0, htmlData);
      this.editingAreaItemService.insertIndex = null;
      this.sortIndex(this.items);
      console.log(this.items);
    } else {
      alert('请选择插入位置');
    }

    // if (window.getSelection().toString() === '') {
    //
    // } else {
    //   this.insertDataTmp = dataTmp;
    // }
  }

}
