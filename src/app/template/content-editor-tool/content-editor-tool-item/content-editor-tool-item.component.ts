import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bl-content-editor-tool-item',
  templateUrl: './content-editor-tool-item.component.html',
  styleUrls: ['./content-editor-tool-item.component.css']
})
export class ContentEditorToolItemComponent implements OnInit {
  @Input() public toolItem: any;
  @Output() public clickBtn: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  bold() {
    document.execCommand('Bold', true);
    this.clickBtn.emit(true);
  }
  italic() {
    document.execCommand('Italic', true);
  }
  slideLine() {
    document.execCommand('Underline', false);
  }

}
