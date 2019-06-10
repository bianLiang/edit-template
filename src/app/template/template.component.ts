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
    public editingAreaItemService: EditingAreaItemService,
  ) { }

  ngOnInit() {
    const that = this;
    that.editingAreaItemService.items = [
      {
        type: 'div',
        index: 0,
        style: {
          'margin': '5px 0'
        },
        children: [
          {
            type: 'txt',
            id: 'txt3',
            style: {
              'margin': 0,
              'line-height': '35px',
              'outline-color': 'blue',
              'font-weight': 400,
              'color': 'red',
            },
            content: '小时不识月， 呼作白玉盘。',
            isEdit: true,
            isShowEditorTool: false,
            toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'fontSize', 'moveUp', 'moveDown', 'delete']
          }
        ]
      },
      {
        type: 'div',
        index: 1,
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
              'line-height': '35px',
            },
            content: '这是新增加的文本',
            isEdit: true,
            isShowEditorTool: false,
            toolConfigure: ['bold', 'italic', 'slideLine', 'link', 'unlink', 'fontColor', 'backgroundColor', 'moveUp', 'moveDown', 'delete']
          }
        ]
      }
    ];
    that.editingAreaItemService.initialCyclel(that.editingAreaItemService.items);
    that.editingAreaItemService.base = 0;
    that.editingAreaItemService.idBase = 0;
    that.editingAreaItemService.sortIndex(that.editingAreaItemService.items);

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
  save() {
    this.editingAreaItemService.endCyclels(this.editingAreaItemService.items);
  }

}
