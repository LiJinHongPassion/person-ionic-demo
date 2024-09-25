export class UserUpgradeStatements {
  userUpgrades = [
    {
      toVersion: 1,
      statements: [
        `CREATE TABLE IF NOT EXISTS users(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          active INTEGER DEFAULT 1
        );`
      ]
    },
    {
      toVersion: 1,
      statements: [
        `CREATE TABLE IF NOT EXISTS users(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          nickname TEXT,
          gender INTEGER CHECK(gender BETWEEN 0 AND 1),
          field TEXT,
          type TEXT,
          profession TEXT,
          birthday TEXT,
          hobbies TEXT,
          education INTEGER,
          phone TEXT,
          value_degree INTEGER CHECK(value_degree BETWEEN 1 AND 10)
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
