import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent  {

  @Input() label: string = ''
  @Input() color: string = ''
  @Input() icon: string = ''
  @Input() clear: boolean = false
  @Output() clearTagClick = new EventEmitter();
  constructor() { }

  getRandomPrettyColor() {
    const colors = ['#f3e794', '#e0e4f7', '#e795c9', '#d3f4ba', '#b7e2f5', '#fbd8b3', '#b1e4f5'];
    const randomIndex = this.hashCode(this.label) % colors.length;
    if(randomIndex >= 0){
      return colors[randomIndex];
    }
    return colors[0];
  }
  onClearClick() {
    this.clearTagClick.emit();
  }
   hashCode(str: string) {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 32位算法
    }
    return hash;
  }

}
