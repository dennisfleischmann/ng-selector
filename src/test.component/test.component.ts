import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: `<div>
  Hello with title:
      <ng-content></ng-content>
    </div>`
})
export class TestComponent implements OnInit {

  ngOnInit() {
    console.log('on init');
  }
}