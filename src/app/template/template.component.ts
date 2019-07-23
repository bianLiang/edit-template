import { Component, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { EeitingAreaItem } from './editing-area-item/eiting-area-item.model';
import { EditingAreaItemService } from './editing-area-item/editing-area-item.service';
import { EditBarComponent } from './edit-bar/edit-bar.component';
import { EditingAreaComponent } from './editing-area/editing-area.component';

@Component({
  selector: 'bl-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @ViewChild('editBar', { static: false }) editBar: EditBarComponent;
  @ViewChild('editingArea', { static: false }) editingArea: EditingAreaComponent;
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
      style: {
        'border-radius': '5px',
        'outline': 'none',
        'width': '150px',
        'height': '30px'
      }
    },
    {
      name: 'fontSize',
      isShow: true,
      style: {
        'width': '110px',
      },
      maximumInterval: 30,
    }
  ];
  // tslint:disable-next-line:max-line-length
  toolBarConfigure = ['text', 'backgroundText', 'img', 'imgGroup', 'imgText', 'backgroundImgText', 'code', 'button', 'line', 'head', 'foot', 'share'];
  constructor(
    public editingAreaItemService: EditingAreaItemService,
  ) { }

  ngOnInit() {
    const that = this;
    that.editingAreaItemService.imgUrl = null;
    that.editingAreaItemService.type = 'txt';
    that.editingAreaItemService.items = [];
    that.editingAreaItemService.isShowBorder = true;
    that.editingAreaItemService.isClick = true;
    that.editingAreaItemService.initialCyclel(that.editingAreaItemService.items);
    that.editingAreaItemService.base = 0;
    that.editingAreaItemService.idBase = 0;
    that.editingAreaItemService.isChange = true;
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
  setEditBarValues() {
    this.editBar.clearValue();
  }
  setScroll(value: number) {
    // this.editingArea.setScroll(value);
  }

}
