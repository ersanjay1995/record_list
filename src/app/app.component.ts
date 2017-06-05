import { Component } from '@angular/core';
import { Record } from './record';
import { RecordService } from './record.service';
import { FilterSearchPipe } from './filter-search.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecordService]
})
export class AppComponent {
  ngOnInit(): void {
    this.getRecords();
  }
  queryString: '';
  records: Record[];
  site_title = 'Record of Records';
  selectedRecord: Record;
  onSelect(record: Record): void {
    this.selectedRecord = record;
  }
  constructor(private recordService: RecordService) {

  }

  getRecords(): void {
    this.recordService.getRecords().then(records => this.records = records);
  }
}
