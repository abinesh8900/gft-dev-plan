import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
})
export class ChildCompComponent implements OnInit {
  @Input() dataFromPar: any;
  @Output() xyz: EventEmitter<any> = new EventEmitter();
  @Output() newItemEvent = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  seeData(data: any) {
    this.xyz.emit(data);
  }
}
