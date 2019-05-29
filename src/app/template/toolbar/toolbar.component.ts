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
    };
    this.selectTmp.emit(data);

  }

}
