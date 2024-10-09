import { SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Injectable} from '@angular/core';
import { SQLiteService } from './sqlite.service';
import { DbnameVersionService } from './dbname-version.service';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserUpgradeStatements } from '../upgrades/user.upgrade.statements';

@Injectable()
export class StorageUserService {
  public userList: BehaviorSubject<User[]> =
  new BehaviorSubject<User[]>([]);
  private databaseName: string = "";
  private uUpdStmts: UserUpgradeStatements = new UserUpgradeStatements();
  private versionUpgrades;
  private loadToVersion;
  private db!: SQLiteDBConnection;
  private isUserReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqliteService: SQLiteService,
  private dbVerService: DbnameVersionService) {
    this.versionUpgrades = this.uUpdStmts.userUpgrades;
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

    await this.getUsers();
  }
  userState() {
    return this.isUserReady.asObservable();
  }
  fetchUsers(): Observable<User[]> {
    return this.userList.asObservable();
  }

  async loadUsers() {
    // await this.db.run('DROP TABLE IF EXISTS users;')
    const users: User[]= (await this.db.query('SELECT * FROM users;')).values as User[];
    this.userList.next(users);
  }
  async getUserById(id: number): Promise<User> { 
    const users: User[] = (await this.db.query(`SELECT * FROM users WHERE id = ${id};`)).values as User[];
    if(users.length === 0){
      return new Promise(()=>{});
    }
    console.log('query user by id = ', id, "##", users[0])
    return users[0];
  }

  async getUsers() {
    await this.loadUsers();
    this.isUserReady.next(true);
  }
  async addUser(user: any) {
    const sql = `INSERT INTO users (
                              name,
                              nickname,
                              gender,
                              field,
                              type,
                              profession,
                              birthday,
                              hobbies,
                              education,
                              phone,
                              value_degree
                            ) VALUES (?,?,?,?,?,?,?,?,?,?,?);`;
    await this.db.run(sql,[
      user.name,
      user.nickname,
      user.gender,
      user.field,
      user.type,
      user.profession,
      user.birthday,
      user.hobbies,
      user.education,
      user.phone,
      user.value_degree
    ]);
    await this.getUsers();
  }

  async updateUserById(id: number, user: { name: any; nickname: any; gender: any; field: any; type: any; profession: any; birthday: any; education: any; phone: any; value_degree: any; }) {
    const sql = `UPDATE users SET 
    name='${user.name}',
    nickname='${user.nickname}',
    gender='${user.gender}',
    field='${user.field}',
    type='${user.type}',
    profession='${user.profession}',
    birthday='${user.birthday}',
    education='${user.education}',
    phone='${user.phone}',
    value_degree='${user.value_degree}'
     WHERE id=${id.toString()}`;
    await this.db.run(sql);
    await this.getUsers();
  }
  async deleteUserById(id: string) {
    const sql = `DELETE FROM users WHERE id=${id}`;
    await this.db.run(sql);
    await this.getUsers();
  }
}
