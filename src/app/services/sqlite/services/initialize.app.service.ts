import { Injectable } from '@angular/core';

import { SQLiteService } from './sqlite.service';
import { StorageUserService } from './storage-user.service';
import { Toast } from '@capacitor/toast';
import { StorageEventService } from './storage-event.service';

@Injectable()
export class InitializeAppService {
  isAppInit: boolean = false;
  platform!: string;

  constructor(
    private sqliteService: SQLiteService,
    private storageService: StorageUserService,
    private storageEventService:StorageEventService
    ) {

  }

  async initializeApp() {
    await this.sqliteService.initializePlugin().then(async (ret) => {
      this.platform = this.sqliteService.platform;
      try {
        if( this.sqliteService.platform === 'web') {
          await this.sqliteService.initWebStore();
        }
        // Initialize the myuserdb database
        const DB_USERS = 'myuserdb'
        const DB_EVENTS = 'myeventdb'
        await this.storageService.initializeDatabase(DB_USERS);
        await this.storageEventService.initializeDatabase(DB_EVENTS)
        // Here Initialize MOCK_DATA if required

        // Initialize whatever database and/or MOCK_DATA you like

        if( this.sqliteService.platform === 'web') {
          await this.sqliteService.saveToStore(DB_USERS);
          await this.sqliteService.saveToStore(DB_EVENTS);
        }

        this.isAppInit = true;

      } catch (error) {
        console.log(`initializeAppError: ${error}`);
        await Toast.show({
          text: `initializeAppError: ${error}`,
          duration: 'long'
        });
      }
    });
  }

}
