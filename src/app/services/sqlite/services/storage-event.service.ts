import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Injectable} from '@angular/core';
import { SQLiteService } from './sqlite.service';
import { DbnameVersionService } from './dbname-version.service'; 
import { BehaviorSubject, Observable } from 'rxjs'; 
import { EventUpgradeStatements } from '../upgrades/event.upgrade.statements';
import { Event } from '../models/event'

@Injectable()
export class StorageEventService {
  public eventList: BehaviorSubject<Event[]> =
  new BehaviorSubject<Event[]>([]);
  private databaseName: string = "";
  private uUpdStmts: EventUpgradeStatements = new EventUpgradeStatements();
  private versionUpgrades;
  private loadToVersion;
  private db!: SQLiteDBConnection;
  private isEventReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqliteService: SQLiteService,
  private dbVerService: DbnameVersionService) {
    this.versionUpgrades = this.uUpdStmts.eventUpgrades;
    this.loadToVersion = this.versionUpgrades[this.versionUpgrades.length-1].toVersion;
  }
  async initializeDatabase(dbName: string) {
    console.log(this.loadToVersion, this.versionUpgrades[this.versionUpgrades.length-1])
    this.databaseName = dbName;
    // create upgrade statements
    await this.sqliteService
      .addUpgradeStatement({  database: this.databaseName,
                              upgrade: this.versionUpgrades});
    // create and/or open the database
    this.db = await this.sqliteService.openDatabase(this.databaseName,
                                          false,
                                          'no-encryption',
                                          this.loadToVersion,
                                          false
    );
    this.dbVerService.set(this.databaseName,this.loadToVersion);

    await this.getEvents();
  }
  eventState() {
    return this.isEventReady.asObservable();
  }
  fetchEvents(): Observable<Event[]> {
    return this.eventList.asObservable();
  }

  async loadEvents() {
    // await this.db.run('DROP TABLE IF EXISTS events;')
    const events: Event[]= (await this.db.query('SELECT * FROM events;')).values as Event[];
    this.eventList.next(events);
  }
  async getEventById(id: number): Promise<Event> { 
    const events: Event[] = (await this.db.query(`SELECT * FROM events WHERE id = ${id};`)).values as Event[];
    if(events.length === 0){
      return new Promise(()=>{});
    }
    console.log('query event by id = ', id, "##", events[0])
    return events[0];
  }

  async getEvents() {
    await this.loadEvents();
    this.isEventReady.next(true);
  }
  async addEvent(event: any) {
    const sql = `INSERT INTO events (
                              date,
                              person,
                              description
                            ) VALUES (?,?,?);`;
    await this.db.run(sql,[
      event.date,
      event.person,
      event.description,
    ]);
    await this.getEvents();
  }

  async updateEventById(id: number, event: { date: any; description: any; person: any; }) {
    const sql = `UPDATE events SET 
    date='${event.date}',
    description='${event.description}',
    person='${event.person}'
     WHERE id=${id.toString()}`;
    await this.db.run(sql);
    await this.getEvents();
  }
  async deleteEventById(id: string) {
    const sql = `DELETE FROM events WHERE id=${id}`;
    console.log('sql', sql)
    await this.db.run(sql);
    await this.getEvents();
  }
}
