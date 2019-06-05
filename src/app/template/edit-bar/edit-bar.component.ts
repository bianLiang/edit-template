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
  // 字体大小滑块
   isFontSize = true;
   fontSizeStyle = {
    'width': '110px',
   };
   fontSizeMaximumInterval = 30;
  fontSize = '0px';
  fontSizeBtn: any;
  fontSizeBar: any;
  fontSizeStep: any;
  // 行距滑块
  isLineHeight = true;
  lineHeightStyle = {
    'width': '110px',
   };
   lineHeightMaximumInterval = 30;
   lineHeight = '0倍';
   lineHeightBtn: any;
   lineHeightBar: any;
   lineHeightStep: any;
  //  间距滑块
  isLetterSpacing = true;
  letterSpacingStyle = {
    'width': '110px',
  };
  letterSpacingMaximumInterval = 30;
  letterSpacing = '0px';
  letterSpacingBtn: any;
  letterSpacingBar: any;
  letterSpacingStep: any;
  // 样式
  isTextStyle = true;
  // 背景
  isBackgroundColor = true;
  backgroundColorStyle = {
    'outline': 'none',
    'width': '111px',
    'height': '30px',
    'border-radius': '5px'
  };
  backgroundColor = '#ffffff';
  backgroundColorList = fontColor;
  // 边框
  isBorder = true;
  borderStyle = {
    'outline': 'none',
    'width': '150px',
    'height': '30px',
    'border-radius': '5px',
    'margin-left': '-5px'
  };
  borderLineStyle = {
    'width': '110px',
  };
  borderLine = '0px';
  borderLineBar: any;
  borderLineBtn: any;
  borderLineStep: any;
  borderLineMaximumInterval = 30;
  borderStyleList = [
    {text: '无边框', value: 'none'},
    {text: '点状', value: 'dotted'},
    {text: '实线', value: 'solid '},
    {text: '双线', value: 'double'},
    {text: '虚线', value: 'dashed'}
  ];
  borderColorStyle = {
    'outline': 'none',
    'width': '110px',
    'height': '30px',
    'border-radius': '5px',
    'margin-left': '44px'
  };
  borderColorList = fontColor;
  borderColor = '#000000';



  // 以下是图片
  // backGroundUrl: any;
  constructor(
    public editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
    this.editingAreaItemService.type = 'txt';
    // tslint:disable-next-line:max-line-length
    this.scale(this.fontSizeBtn, this.fontSizeBar, this.fontSizeStep, 'font-size-btn', 'font-size-bar', 'fontSize', this.fontSizeMaximumInterval);
    // tslint:disable-next-line:max-line-length
    this.scale(this.lineHeightBtn, this.lineHeightBar, this.lineHeightStep, 'line-height-btn', 'line-height-bar', 'lineHeight', this.lineHeightMaximumInterval);
    // tslint:disable-next-line:max-line-length
    this.scale(this.letterSpacingBtn, this.letterSpacingBar, this.letterSpacingStep, 'letter-spacing-btn', 'letter-spacing-bar', 'letterSpacing', this.letterSpacingMaximumInterval);
    // tslint:disable-next-line:max-line-length
    this.scale(this.borderLineBtn, this.borderLineBar, this.borderLineStep, 'border-line-btn', 'border-line-bar', 'borderLine', this.borderLineMaximumInterval);
  }
  setValue(obj: any) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].name === 'typefaces') {
        this.typefaces = obj[i].typefacesList ? obj[i].typefacesList : this.typefaces;
        this.isShowTypefaces = obj[i].isShow === undefined ? this.isShowTypefaces : obj[i].isShow;
        this.typefacesStyle = obj[i].typefacesStyle ? obj[i].typefacesStyle : this.fontColorStyle;
      }
      if (obj[i].name === 'fontColor') {
        this.fontColor = obj[i].fontColorList ? obj[i].fontColorList : this.fontColor;
        this.isFontColor = obj[i].isShow === undefined ? this.isFontColor : obj[i].isShow;
        this.fontColorStyle = obj[i].fontColorStyle ? obj[i].fontColorStyle : this.typefacesStyle;
      }
      if (obj[i].name === 'fontSize') {
        this.isFontSize = obj[i].isShow === undefined ? this.isFontSize : obj[i].isShow;
        this.fontSizeMaximumInterval = obj[i].maximumInterval ? obj[i].maximumInterval : this.fontSizeMaximumInterval;
        this.fontSizeStyle = obj[i].fontSizeStyle ? obj[i].fontSizeStyle : this.fontSizeStyle;
      }
    }
  }
  setTypeface(value: string) {
    this.editingAreaItemService.itemDom.style['font-family'] = value;
    this.editingAreaItemService.elem.focus();
  }
  setfontColor(value: string) {
    this.fontBackgroundColor = value;
    this.fontColorStyle['background-color'] = value;
    this.editingAreaItemService.itemDom.style.color = value;
    this.editingAreaItemService.elem.focus();
  }
  setBorderStyle(value: string) {
    this.editingAreaItemService.itemDom.style['border-style'] = value;
    this.editingAreaItemService.elem.focus();
  }
  setBackgroundColorStyle(value: string) {
    this.backgroundColor = value;
    this.backgroundColorStyle['background-color'] = value;
    this.editingAreaItemService.itemDom.style.background = value;
    this.editingAreaItemService.elem.focus();
  }
  setborderColorStyle(value: string) {
    this.borderColor = value;
    this.borderColorStyle['background-color'] = value;
    this.editingAreaItemService.itemDom.style['border-color'] = value;
    this.editingAreaItemService.elem.focus();
  }


  // 滑块
  scale(btndom: any, bardom: any, stepdom: any, btn: any, bar: any, name: any, maximumInterval: number) {
    btndom = document.getElementById(btn);
    bardom = document.getElementById(bar);
    // this.btn = document.getElementById(btn);
    // this.bar = document.getElementById(bar);
    // stepdom = bardom.getElementsByTagName('DIV')[0];
    // this.init(maximumInterval, name, btndom, bardom, stepdom);
    stepdom = bardom.getElementsByTagName('DIV')[0];
    this.init(maximumInterval, name, btndom, bardom, stepdom);
    // if (bardom) {
    //   stepdom = bardom.getElementsByTagName('DIV')[0];
    //   this.init(maximumInterval, name, btndom, bardom, stepdom);
    // }
  }
  init(maximumInterval: number, name: string, btndom: any, bardom: any, stepdom: any) {
    const f = this;
    const g = document;
    const b = window;
    const m = Math;
    btndom.onmousedown = function(e: any) {
      const x = e.clientX;
      const l = this.offsetLeft;
      const max = bardom.offsetWidth - this.offsetWidth;
      // tslint:disable-next-line:only-arrow-functions
      g.onmousemove = function(es) {
        f.editingAreaItemService.elem.focus();
        const thisX = es.clientX;
        const to = m.min(max, m.max(-2, l + (thisX - x)));
        btndom.style.left = to + 'px';
        f.ondrag(m.round(m.max(0, to / max) * maximumInterval), to, name, stepdom);
        if (b.getSelection) {
          b.getSelection().removeAllRanges();
        }
      };
      g.onmouseup = function() {
        this.onmousemove = null;
      };
    };
  }
  ondrag(pos: any, x: any, name: string, stepdom: any) {
    stepdom.style.width = Math.max(0, x) + 'px';
    if (name === 'fontSize') {
      this.fontSize = pos + 'px';
      this.editingAreaItemService.itemDom.style['font-size'] = this.fontSize;
    } else if (name === 'lineHeight') {
      this.lineHeight = pos / 10 + '倍';
      this.editingAreaItemService.itemDom.style['line-height'] = pos / 10;
    } else if (name === 'letterSpacing') {
      this.letterSpacing = pos + 'px';
      this.editingAreaItemService.itemDom.style['letter-spacing'] =  this.letterSpacing;
    } else if (name === 'borderLine') {
      this.borderLine = pos + 'px';
      this.editingAreaItemService.itemDom.style['border-width'] =  this.borderLine;
    }
  }

  changeTextStyle(style: string) {
    if (style === 'font-weight') {
      if (this.editingAreaItemService.itemDom.style['font-weight'] || this.editingAreaItemService.itemDom.style['font-weight'] === 400) {
        if (this.editingAreaItemService.itemDom.style['font-weight'] >= 600) {
          this.editingAreaItemService.itemDom.style['font-weight'] = 400;
        } else {
          this.editingAreaItemService.itemDom.style['font-weight'] = 600;
        }
      } else {
        this.editingAreaItemService.itemDom.style['font-weight'] = 600;
      }
    } else if (style === 'font-style') {
      if (this.editingAreaItemService.itemDom.style['font-style'] || this.editingAreaItemService.itemDom.style['font-style'] === 'italic') {
        if (this.editingAreaItemService.itemDom.style['font-style'] === 'italic') {
          this.editingAreaItemService.itemDom.style['font-style'] = 'normal';
        } else {
          this.editingAreaItemService.itemDom.style['font-style'] = 'italic';
        }
      } else {
        this.editingAreaItemService.itemDom.style['font-style'] = 'italic';
      }
    } else if (style === 'left') {
      this.editingAreaItemService.itemDom.style['text-align'] = 'left';
    } else if (style === 'center') {
      this.editingAreaItemService.itemDom.style['text-align'] = 'center';
    } else if (style === 'right') {
      this.editingAreaItemService.itemDom.style['text-align'] = 'right';
    } else if (style === 'justify') {
      this.editingAreaItemService.itemDom.style['text-align'] = 'justify';
    }
    this.editingAreaItemService.elem.focus();
  }


  // 图片
  onChangePicture(e: any) {
    const that = this;
    const file = e.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      that.editingAreaItemService.imgUrl = this.result;
      that.editingAreaItemService.itemDom.url = this.result;
      // that.problemList[index].option[i].imgUrl = this.result;
    };
  }
  onChangeUrl(value: any) {
    this.editingAreaItemService.itemDom.href = value;
  }


}

