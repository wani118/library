import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
//import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // @Input('parentData') public name : string;
  @Input() public pinId: string;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Added new participant:'+' ' + this.pinId);
  }
}
