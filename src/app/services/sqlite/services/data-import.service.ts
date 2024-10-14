// src/app/data-import.service.ts
import { Injectable } from '@angular/core';
import * as xlsx from 'xlsx';
import { StorageUserService } from './storage-user.service';
import { ToastComponent } from '../../toast/toast.component.service';

@Injectable({
  providedIn: 'root'
})
export class DataImportService { 

  constructor(private storageUserService: StorageUserService, private toast: ToastComponent) { }

  async importExcelData(file: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = xlsx.read(data, { type: 'array' });
      const sheetName = '人员';
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = xlsx.utils.sheet_to_json(worksheet);
      console.log(jsonData); // 处理或使用数据
      if(jsonData.length > 0){
        this.storageUserService.insertUsers(jsonData)
        this.toast.showInfo('success: ' + jsonData.length)
      }else{
        this.toast.showError('empty')
      }
      
    }

    reader.readAsArrayBuffer(file);
  }
}