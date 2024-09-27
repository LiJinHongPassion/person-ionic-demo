import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent  {

  @Input() label: string = ''
  @Input() color: string = ''
  constructor() { }

  getRandomPrettyColor() {
    const colors = ['#f3e794', '#e0e4f7', '#e795c9', '#d3f4ba', '#b7e2f5', '#fbd8b3', '#b1e4f5'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

}
