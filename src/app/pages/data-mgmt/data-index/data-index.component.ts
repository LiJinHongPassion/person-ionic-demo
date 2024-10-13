import { Component, OnInit } from '@angular/core';
import { DataImportService } from 'src/app/services/sqlite/services/data-import.service';

import * as xlsx from 'xlsx';

@Component({
  selector: 'app-data-index',
  templateUrl: './data-index.component.html',
  styleUrls: ['./data-index.component.scss'],
})
export class DataIndexComponent  implements OnInit {

  constructor(private dataImportService: DataImportService) { }

  ngOnInit() {}

  onImportExcel(event: any) {
    console.log('event', event)
    const excelFilePath = event.target.files[0]
    this.dataImportService.importExcelData(excelFilePath).then(() => {
      console.log('Excel data imported successfully');
    });
  }

  onFileSelected(event: any) {
    const file = ((event.target as HTMLInputElement)?.files ?? [])[0];
    if (file) {
    this.dataImportService.importExcelData(file).then(() => {
      console.log('Excel data imported successfully');
    });
    }
  }
}
