import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'bl-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  insertDataTmp: any;
  items = [
    {
      name: 'blockOne',
      type: 'div',
      style: {
        // 'width': '100%',
        // 'background-color': '#fff',
        // 'text-align': 'center',
      },
      children: [
        {
          type: 'div',
          style: {
            // 'width': '100%',
            // 'height': '100%',
            // 'text-align': 'center',
            // 'float': 'left',
            // 'display': 'flex',
            // 'align-items': 'center ',
            // 'position': 'relative',
            // 'border': '1px solid #ccc',
          },
          children: [
            {
              type: 'txt',
              style: {
                'margin': 0
              },
              content: '如果图片不能正常显示，<a href="" target="_blank">请点击这里</a>',
              isEdit: true,
              isShowEditorTool: false,
              toolConfigure: ['bold', 'italic', 'slideLine']
            }
          ]
        },
      ]
    },
    {
      name: 'blockTwo',
      type: 'div',
      children: [
        {
          type: 'button',
          style: {
            // tslint:disable-next-line:object-literal-key-quotes
            'background': '#fff',
            // tslint:disable-next-line:object-literal-key-quotes
            'border': '1px solid #ccc',
            'color': 'red'
          },
          content: '立即点击',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine']
        }
      ]
    }
  ];
  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.initialCyclel(this.items);
  }
  trustHtml(str) {
    return this.sanitizer.bypassSecurityTrustHtml(str);
  }
  initialCyclel(obj) {
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
  selectTmp(dataTmp: any) {
    console.log(dataTmp);
    this.insertDataTmp = dataTmp;
  }

}
