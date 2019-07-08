import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EeitingAreaItem } from '../editing-area-item/eiting-area-item.model';


@Component({
  selector: 'bl-editing-area',
  templateUrl: './editing-area.component.html',
  styleUrls: ['./editing-area.component.css']
})
export class EditingAreaComponent implements OnInit {
  @Input() public items: EeitingAreaItem[];
  @Output() public setEditBarValues: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  setEditBarValue() {
    this.setEditBarValues.emit();
  }
}
