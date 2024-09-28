import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent  implements OnInit {

  @Input() tags: string[] = [];
  @Input() clear: boolean = true
  @Output() deleteTag = new EventEmitter();
  @Output() tagOnChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}
 
  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

}
