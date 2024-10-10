export class EventUpgradeStatements {
  eventUpgrades = [
    {
      toVersion: 5,
      statements: [
        `CREATE TABLE IF NOT EXISTS events(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          date TEXT NOT NULL,
          pserson TEXT,
          description TEXT
        );`
      ]
    }, 
    /* add new statements below for next database version when required*/
    /*
    {
      toVersion: 2,
      statements: [
        `ALTER TABLE events ADD COLUMN email TEXT;`,
      ]
    }
    */
  ]
}
