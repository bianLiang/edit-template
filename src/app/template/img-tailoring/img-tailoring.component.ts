import { Component, OnInit } from '@angular/core';
import { ImgTailoringService } from './img-tailoring.service';
import { EditingAreaItemService } from '../editing-area-item/editing-area-item.service';

@Component({
  selector: 'bl-img-tailoring',
  templateUrl: './img-tailoring.component.html',
  styleUrls: ['./img-tailoring.component.css']
})
export class ImgTailoringComponent implements OnInit {
  clientHeight: number;
  clientWidth: number;
  box: any;
  mainDiv: any;
  rightDiv: any;
  up: any;
  left: any;
  down: any;
  left_up: any;
  right_up: any;
  left_down: any;
  right_down: any;
  ifKeyDown: any;
  contact: any;
  disX: any;
  disY: any;
  imgUrl: any;
  previewUrl: any;
  constructor(
    public imgTailoringService: ImgTailoringService,
    public editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
    const that = this;
    this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    this.clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //  防止框选变蓝
    document.onselectstart = () => {
      return false;
    };
    that.box = document.getElementById('box');
    that.rightDiv = document.getElementById('right');
    that.mainDiv = document.getElementById('main');
    that.up = document.getElementById('up');
    that.left = document.getElementById('left');
    that.down = document.getElementById('down');
    that.left_up = document.getElementById('left_up');
    that.right_up = document.getElementById('right_up');
    that.left_down = document.getElementById('left_down');
    that.right_down = document.getElementById('right_down');
    that.ifKeyDown = false;
    that.contact = '';
    that.setChoice();
    that.rightDiv.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'rightDiv';
    };
    that.up.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'up';
    };
    that.left.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'left';
    };
    that.down.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'down';
    };
    that.left_up.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'left_up';
    };
    that.left_down.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'left_down';
    };
    that.right_up.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'right_up';
    };
    that.right_down.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'right_down';
    };
    that.mainDiv.onmousedown = (e: any) => {
      e.stopPropagation();
      that.ifKeyDown = true;
      that.contact = 'box';
    };
    window.onmouseup = (e: any) => {
      that.ifKeyDown = false;
      that.contact = '';
    };
    window.onmousemove = (e: any) => {
      if (that.ifKeyDown) {
        switch (that.contact) {
          case 'rightDiv': that.rightMove(e); break;
          case 'up': that.upMove(e); break;
          case 'left': that.leftMove(e); break;
          case 'down': that.downMove(e); break;
          case 'left_up': that.leftMove(e); that.upMove(e); break;
          case 'left_down': that.leftMove(e); that.downMove(e); break;
          case 'right_up': that.rightMove(e); that.upMove(e); break;
          case 'right_down': that.rightMove(e); that.downMove(e); break;
          // case 'box':tuo(e);break;
        }
      }
      that.setChoice();
    };
    that.mainDiv.onmousedown = (e: any) => {
      that.ifKeyDown = true;
      const oEvent = e;
      that.disX = oEvent.clientX - that.mainDiv.offsetLeft;
      that.disY = oEvent.clientY - that.mainDiv.offsetTop;
      document.onmousemove = (es: any) => {
        const oEvents = es;
        let l = oEvents.clientX - that.disX;
        let t = oEvents.clientY - that.disY;
        if (l < 0) {
          l = 0;
        } else if (l > that.box.offsetWidth - that.mainDiv.offsetWidth) {
          l = that.box.offsetWidth - that.mainDiv.offsetWidth;
        }
        if (t < 0) {
          t = 0;
        } else if (t > that.box.offsetHeight - that.mainDiv.offsetHeight) {
          t = that.box.offsetHeight - that.mainDiv.offsetHeight;
        }
        that.mainDiv.style.top = t + 'px';
        that.mainDiv.style.left = l + 'px';
        that.setPreview();
      };
      document.onmouseup = (es: any) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    };

  }

  setChoice() {
    const top = this.mainDiv.offsetTop;
    const right = this.mainDiv.offsetLeft + this.mainDiv.offsetWidth;
    const bottom = this.mainDiv.offsetTop + this.mainDiv.offsetHeight;
    const left = this.mainDiv.offsetLeft;
    const img2 = document.getElementById('img2');
    if (img2) {
      img2.style.clip = 'rect(' + top + 'px,' + right + 'px,' + bottom + 'px,' + left + 'px)';
    }
    // 设置根据选区时刻预览效果图
    // this.setPreview();
  }
  bili(img, box) {
    const ws = Math.round(img.width / box.offsetWidth * 100) / 100;
    const hs = Math.round(img.height / box.offsetHeight * 100) / 100;
    return { w: ws, h: hs };
  }
  setPreview() {
    const that = this;
    const l = that.mainDiv.offsetLeft;
    const t = that.mainDiv.offsetTop;
    const tt = that.right_down.offsetTop - that.right_up.offsetTop;
    const ll = that.right_down.offsetLeft - that.left_down.offsetLeft;
    const canvas: any = document.getElementById('canvas');
    if (canvas) {
      const context = canvas.getContext('2d');
      const box = document.getElementById('box');
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = that.imgTailoringService.cropUrl;
      img.onload = () => {
        // tslint:disable-next-line:max-line-length
        context.drawImage(img, l * that.bili(img, box).w, t * that.bili(img, box).h, ll * that.bili(img, box).w, tt * that.bili(img, box).h, 0, 0, 650, 300);
        that.imgUrl = canvas.toDataURL('image/jpeg');
      };
    }
  }
  rightMove(e) {
    let x = e.clientX;
    if (x > this.getPosition(this.box).left + this.box.offsetWidth) {
      x = this.getPosition(this.box).left + this.box.offsetWidth;
    }
    const widthBefore = this.mainDiv.offsetWidth - 2;
    let addWidth: any;
    addWidth = x - this.getPosition(this.mainDiv).left - widthBefore;
    this.mainDiv.style.width = addWidth + widthBefore + 'px';
  }
  upMove(e) {
    let y = e.clientY;
    if (y < this.getPosition(this.box).top) {
      y = this.getPosition(this.box).top;
    }
    const heightBefore = this.mainDiv.offsetHeight - 2;
    const mainY = this.getPosition(this.mainDiv).top;
    const addHeight = mainY - y;
    this.mainDiv.style.height = heightBefore + addHeight + 'px';
    this.mainDiv.style.top = this.mainDiv.offsetTop - addHeight + 'px';
  }
  downMove(e) {
    let y = e.clientY;
    // console.log(y);
    if (y > this.getPosition(this.box).top + this.box.offsetHeight) {
      y = this.getPosition(this.box).top + this.box.offsetHeight;
    }
    const heightBefore = this.mainDiv.offsetHeight - 2;
    const mainY = this.getPosition(this.mainDiv).top;
    // console.log(mainY);
    // console.log(y);
    const addHeight = y - heightBefore - mainY;
    this.mainDiv.style.height = addHeight + heightBefore + 'px';
  }
  leftMove(e) {
    let x = e.clientX;
    if (x < this.getPosition(this.box).left) {
      x = this.getPosition(this.box).left;
    }
    const widthBefore = this.mainDiv.offsetWidth - 2;
    const mainX = this.getPosition(this.mainDiv).left;
    const addWidth = mainX - x;
    this.mainDiv.style.width = widthBefore + addWidth + 'px';
    this.mainDiv.style.left = this.mainDiv.offsetLeft - addWidth + 'px';
  }

  getPosition(obj) {
    let left = obj.offsetLeft;
    let top = obj.offsetTop;
    let parent = obj.offsetParent;
    while (parent != null) {
      left += parent.offsetLeft;
      top += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return { 'left': left, 'top': top };
  }

  complete() {
    const that = this;
    const l = that.mainDiv.offsetLeft;
    const t = that.mainDiv.offsetTop;
    const tt = that.right_down.offsetTop - that.right_up.offsetTop;
    const ll = that.right_down.offsetLeft - that.left_down.offsetLeft;
    const canvas: any = document.getElementById('canvas');
    if (canvas) {
      canvas.width = this.mainDiv.offsetWidth;
      canvas.height = this.mainDiv.offsetHeight;
      const context = canvas.getContext('2d');
      const box = document.getElementById('box');
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = that.imgTailoringService.cropUrl;
      img.onload = () => {
        // tslint:disable-next-line:max-line-length
        context.drawImage(img,
            l * that.bili(img, box).w,
            t * that.bili(img, box).h,
            ll * that.bili(img, box).w,
            tt * that.bili(img, box).h,
            0, 0, canvas.width, canvas.height);
        const url = canvas.toDataURL('image/jpeg');
        that.previewUrl = url;
        that.editingAreaItemService.itemDom.url = url;
        that.editingAreaItemService.imgUrl = url;
        that.editingAreaItemService.itemDom.isCrop = false;
        that.editingAreaItemService.itemDom.isNoUploading = false;
        document.onselectstart = () => {
          return true;
        };
      };
    }
  }
  giveUp() {
    this.editingAreaItemService.itemDom.isCrop = false;
    this.editingAreaItemService.itemDom.isNoUploading = false;
    document.onselectstart = () => {
      return true;
    };
  }
}
