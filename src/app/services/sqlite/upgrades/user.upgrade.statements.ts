export class UserUpgradeStatements {
  userUpgrades = [
    {
      toVersion: 4,
      statements: [
        `CREATE TABLE IF NOT EXISTS users(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          nickname TEXT,
          gender TEXT,
          field TEXT,
          type TEXT,
          profession TEXT,
          birthday TEXT,
          hobbies TEXT,
          education TEXT,
          phone TEXT,
          value_degree TEXT
        );`
      ]
    }, 
    /* add new statements below for next database version when required*/
    /*
    {
      toVersion: 2,
      statements: [
        `ALTER TABLE users ADD COLUMN email TEXT;`,
      ]
    }
    */
  ]
}
