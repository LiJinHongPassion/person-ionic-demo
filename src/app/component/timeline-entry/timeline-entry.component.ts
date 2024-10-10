// timeline-entry.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss'],
})
export class TimelineEntryComponent {
  @Input() date: string = '';
  @Input() persons: { name: string; avatar: string }[] = []; // Array of persons with names and avatars
  @Input() description: string = '';
  @Input() isLast: boolean = false; // 新添加的属性
  @Input() isFirst: boolean = false; // 新添加的属性
}