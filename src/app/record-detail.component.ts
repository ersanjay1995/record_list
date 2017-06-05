import { Component, Input } from '@angular/core';
import { Record } from './record';

@Component({
  selector: 'record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./app.component.css']
})
export class RecordDetailComponent {
  @Input() record: Record;
}
