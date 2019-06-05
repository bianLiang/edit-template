import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EeitingAreaItem } from '../editing-area-item/eiting-area-item.model';


@Component({
  selector: 'bl-editing-area',
  templateUrl: './editing-area.component.html',
  styleUrls: ['./editing-area.component.css']
})
export class EditingAreaComponent implements OnInit {
  @Input() public items: EeitingAreaItem[];
  @Input() public insertDataTmp: any;
  @Output() public selectItem: EventEmitter<any> = new EventEmitter();
  @Output() public deleteTemps: EventEmitter<any> = new EventEmitter();
  @Output() public setContent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  selectEditAreaBoxItem(value: any) {
    this.selectItem.emit(value);
  }
  deleteTemp() {
    this.deleteTemps.emit();
  }
  setContentTmp(content: any) {
    this.setContent.emit(content);
  }
}
