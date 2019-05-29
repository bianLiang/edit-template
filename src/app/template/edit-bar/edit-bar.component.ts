import { Component, OnInit, Input } from '@angular/core';
import { EditingAreaItemService } from '../editing-area-item/editing-area-item.service';
import { typefaces, fontColor } from './edit-bar-data';
@Component({
  selector: 'bl-edit-bar',
  templateUrl: './edit-bar.component.html',
  styleUrls: ['./edit-bar.component.css']
})
export class EditBarComponent implements OnInit {
  @Input()
  set editBarConfigure(value: any) {
    console.log(value);
    if (value) {
      this.setValue(value);
    }
  }
  // 字体
  typefaces = typefaces;
  isShowTypefaces = true;
  typefacesStyle = {
    'outline': 'none',
    'width': '150px',
    'height': '30px',
    'border-radius': '5px'
  };
  // 字体颜色
  fontColor = fontColor;
  isFontColor = true;
  fontColorStyle = {
    'outline': 'none',
    'width': '111px',
    'height': '30px',
    'border-radius': '5px'
  };
  fontBackgroundColor = '#ffffff';
  // 滑块
  btn: any;
  bar: any;
  title: any;
  step: any;
  fontSize = '0px';
  constructor(
    public editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
    this.scale('btn0', 'bar0', 'title0');
  }
  setValue(obj: any) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].name === 'typefaces') {
        this.typefaces = obj[i].typefacesList ? obj[i].typefacesList : this.typefaces;
        this.isShowTypefaces = obj[i].isShow ? obj[i].isShow : this.isShowTypefaces;
        this.typefacesStyle = obj[i].typefacesStyle ? obj[i].typefacesStyle : this.fontColorStyle;
      }
      if (obj[i].name === 'fontColor') {
        this.fontColor = obj[i].fontColorList ? obj[i].fontColorList : this.fontColor;
        this.isFontColor = obj[i].isShow ? obj[i].isShow : this.isFontColor;
        this.fontColorStyle = obj[i].fontColorStyle ? obj[i].fontColorStyle : this.typefacesStyle;
      }
    }
  }
  setTypeface(value: string) {
    this.editingAreaItemService.itemDom.style['font-family'] = value;
  }
  setfontColor(value: string) {
    this.fontBackgroundColor = value;
    this.editingAreaItemService.itemDom.style.color = value;
  }


  // 滑块
  scale(btn: any, bar: any, title: any) {
    this.btn = document.getElementById(btn);
    this.bar = document.getElementById(bar);
    this.step = this.bar.getElementsByTagName('DIV')[0];
    this.init();
  }
  init() {
    const f = this;
    const g = document;
    const b = window;
    const m = Math;
    f.btn.onmousedown = function(e) {
      const x = e.clientX;
      const l = this.offsetLeft;
      const max = f.bar.offsetWidth - this.offsetWidth;
      // tslint:disable-next-line:only-arrow-functions
      g.onmousemove = function(es) {
        const thisX = es.clientX;
        const to = m.min(max, m.max(-2, l + (thisX - x)));
        f.btn.style.left = to + 'px';
        f.ondrag(m.round(m.max(0, to / max) * 30), to);
        if (b.getSelection) {
          b.getSelection().removeAllRanges();
        }
      };
      g.onmouseup = function() {
        this.onmousemove = null;
      };
    };
  }

  ondrag(pos: any, x: any) {
    this.step.style.width = Math.max(0, x) + 'px';
    this.fontSize = pos + 'px';
  }


}
