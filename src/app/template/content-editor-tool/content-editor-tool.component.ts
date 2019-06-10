import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bl-content-editor-tool',
  templateUrl: './content-editor-tool.component.html',
  styleUrls: ['./content-editor-tool.component.css']
})
export class ContentEditorToolComponent implements OnInit {
  @Input() public toolConfigure: any;

  constructor() { }

  ngOnInit() {
  }
}
