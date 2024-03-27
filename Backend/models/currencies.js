const db = require('../util/database');

module.exports = class Currencies {
  constructor(id, item) {
    this.id = id;
    this.item = item;
    this.full_name = name;
    this.rate = rate;
    this.symbol = symbol;
  }



  static fetchAll() {
    return db.execute('SELECT * FROM Currencies');
  }

  static post(item) {
    return db.execute('INSERT INTO Currencies (item) VALUES (?)', [item]);
  }

  static update(id, item) {
    return db.execute('UPDATE currencies SET item = ? WHERE id = ?', [item, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM currencies WHERE id = ?', [id]);
  }

  
};