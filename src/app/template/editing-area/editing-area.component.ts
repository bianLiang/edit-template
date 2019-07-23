import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EeitingAreaItem } from '../editing-area-item/eiting-area-item.model';
import { EditingAreaItemService } from '../editing-area-item/editing-area-item.service';


@Component({
  selector: 'bl-editing-area',
  templateUrl: './editing-area.component.html',
  styleUrls: ['./editing-area.component.css']
})
export class EditingAreaComponent implements OnInit {
  @Input() public items: EeitingAreaItem[];
  @Output() public setEditBarValues: EventEmitter<any> = new EventEmitter();

  constructor(
    private editingAreaItemService: EditingAreaItemService
  ) { }

  ngOnInit() {
  }
  setEditBarValue() {
    this.setEditBarValues.emit();
  }
  setScroll(value: any) {
    // console.log(value);
    // const ele = document.getElementById('editing-area-box');
    // console.log(document.getElementById(this.editingAreaItemService.setScrollId).offsetParent);
    // tslint:disable-next-line:max-line-length
    // ele.scrollTop = value + ele.scrollTop - document.body.clientHeight + document.getElementById(this.editingAreaItemService.setScrollId).offsetHeight + 70;
  }
}
