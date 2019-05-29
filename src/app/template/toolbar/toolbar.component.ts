import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bl-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() public selectTmp: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClickText() {
    const data = {
      type: 'div',
      index: null,
      children: [
        {
          type: 'txt',
          style: {
            // tslint:disable-next-line:object-literal-key-quotes
            'background': '#fff',
            'color': 'red',
            'margin': 0,
            'line-height': '35px'
          },
          content: '这是新增加的文本',
          isEdit: true,
          isShowEditorTool: false,
          toolConfigure: ['bold', 'italic', 'slideLine']
        }
      ]
    };
    this.selectTmp.emit(data);

  }

}
