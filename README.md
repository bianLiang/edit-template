## 项目
基于angular编写的富文本模块编辑器

### demo演示

![动图](https://thumbnail0.baidupcs.com/thumbnail/580f167cce1bceb132e0dc9cc7b24feb?fid=3426899154-250528-902201281854451&time=1560924000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-0nA12je%2B6l41s7KykFRLWZ61k8A%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3933970193553128547&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video)

## 使用
npm install xre-edit-template --save  
npm install ng-zorro-antd --save  
或者直接下载源码在自己的项目中使用

在需要使用的模块里引入下面代码
```
import { TemplateModule, EditingAreaItemService } from 'xre-edit-template';
import { NzModalModule} from 'ng-zorro-antd';
import { NzMessageModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
   TemplateModule,
   NzModalModule,
   NzMessageModule,
   FormsModule
  ],
  providers: [
    EditingAreaItemService
  ]
})
```
## 项目目录
app  
    &emsp;template  
    &emsp;--content-editor-tool  
    &emsp;--edit-bar  
    &emsp;--editing-area  
    &emsp;--editing-area-item  
    &emsp;toolbar  
    &emsp;template.component.css  
    &emsp;template.component.html  
    &emsp;template.component.ts  
    &emsp;template.module.ts
    app-routing.module.ts  
    app.component.css  
    app.component.html  
    app.component.ts  
    app.module.ts

## 配置
#### 内容区
![avatar](http://a3.qpic.cn/psb?/V14dc6bM1BCIxt/iLoR0w40iEG.jX92RLNZrn4JqKCVknC5fgRwDN9ASd0!/m/dDYBAAAAAAAAnull&bo=hALnAgAAAAADB0E!&rf=photolist&t=5)
``` 
<div id='editing-area'>
  <bl-editing-area [items]="editingAreaItemService.items">
  </bl-editing-area>
</div>

```
其中注意id='editing-area'是必须的，除非你自行下载源码下载使用可以更改

首先配置items数据如下

```
ngOnInit() {
    that.editingAreaItemService.items = [
    {
      type: 'div',
      index: 0,
      style: {
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
            'background': '#fff',
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
    that.editingAreaItemService.initialCyclel(that.editingAreaItemService.items);
    that.editingAreaItemService.base = 0;
    that.editingAreaItemService.idBase = 0;
    that.editingAreaItemService.sortIndex(that.editingAreaItemService.items);
}
  
```
其中  
isEdit&emsp;控制此块是否可以被编辑；  
isShowEditorTool&emsp;控制是否显示行内编辑器；  
toolConfigure&emsp;显示行内编辑器哪些工具显示  

![avatar](https://thumbnail0.baidupcs.com/thumbnail/f8e02fbf7a9d6810a5da3099e689d6ee?fid=3426899154-250528-252183015225510&time=1560916800&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-zLPJ2y4QmUe3eIwye9ZPEv%2B%2BJCs%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=3931627711021755050&dp-callid=0&size=c710_u400&quality=100&vuk=-&ft=video)

#### 工具栏
![avatar](http://a1.qpic.cn/psb?/V14dc6bM1BCIxt/SgD7jVdxiDt5zXxyhFCP4Nh5oZCxJGpyDPfxrhdv2uk!/m/dFQBAAAAAAAAnull&bo=CwHKAQAAAAADB.M!&rf=photolist&t=5)
```
 <bl-toolbar [toolBarConfigure]="toolBarConfigure"></bl-toolbar>
 ```
 ```
 //这里是配置工具栏哪个显示和隐藏
 toolBarConfigure = [
    'text', 
    'backgroundText', 
    'img', 
    'imgGroup', 
    'imgText', 
    'backgroundImgText', 
    'code', 
    'button', 
    'line', 
    'head', 
    'foot', 
    'share'];
 ```
 
 #### 编辑栏
 ![avatar](http://a4.qpic.cn/psb?/V14dc6bM1BCIxt/7c8RhcsZD13hM9p1NKIUhWMC6t057T17l6SKbi8LHuo!/m/dL8AAAAAAAAAnull&bo=FAHEAQAAAAADB*I!&rf=photolist&t=5)
 ![avatar](http://a4.qpic.cn/psb?/V14dc6bM1BCIxt/LrPVWRUMUCdoVULZP72sWRqnDQfTCnMmzLPy*BiXbBg!/m/dL8AAAAAAAAAnull&bo=DgHEAQAAAAADB.g!&rf=photolist&t=5)
 ![avatar](http://a3.qpic.cn/psb?/V14dc6bM1BCIxt/TdQqjuVt5S2USt5DPeSQTwN8FJ985ei7ZuJx4JePdP4!/m/dL4AAAAAAAAAnull&bo=EwHDAQAAAAADB*I!&rf=photolist&t=5)
 
 ```
 <bl-edit-bar [editBarConfigure]="editBarConfigure"></bl-edit-bar>
 ```
 ```
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
  ```
  上述配置不完全  
  name&emsp;代表编辑栏工具的名称
  isShow&emsp;控制编辑栏工具是否显示和隐藏  
  style&emsp;控制样式
  maximumInterval&emsp;控制滑块拉动区间
  
  下面列出目前配置的工具名称，具体使用请参照源码使用，配置同上：  
  typefaces &emsp;字体  
  fontSize &emsp;字号  
  fontColor &emsp;字体颜色  
  lineHeight &emsp;行距  
  letterSpacing &emsp;间距  
  textStyle &emsp;居中等文本样式  
  backgroundColor &emsp;文本背景色  
  imgTextBackgroundColor &emsp;图文块背景色  
  border &emsp;边框  
  lineBorder &emsp;分割线  
  
  
  
  
  


