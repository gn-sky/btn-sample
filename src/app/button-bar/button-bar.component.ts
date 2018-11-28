import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent {

  titleArray: string[];
  @Output() btnTitle = new EventEmitter<string>();

  constructor() { }

  onKey(userInput: string) {
    this.titleArray = userInput.split(',');
  }

  onClick(title: string) {
    this.btnTitle.emit(title);
  }
}
