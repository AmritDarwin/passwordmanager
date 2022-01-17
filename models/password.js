const db = require("../helpers/database");

module.exports = class Password {
  constructor(id, user_id, website, email, password) {
    this.id = id;
    this.user_id = user_id;
    this.website = website;
    this.email = email;
    this.password = password;
  }

  get() {
    return db.execute("select * from password WHERE user_id = ?", [this.user_id]);
  }

  getWhere() {
    return db.execute("SELECT * from password WHERE id = ?", [this.user_id]);
  }

  save() {
    const sqlQuery = "INSERT into password (user_id,website,email,password) VALUES (?,?,?,?)";
    const values = [this.user_id, this.website, this.email, this.password];
    return db.execute(
      sqlQuery,
      values
    );
  }

  update() {
    const query =
      "UPDATE password SET website = ?,email = ?,password = ? WHERE user_id = ? AND id = ?";
    return db.execute(query, [
      this.website,
      this.email,
      this.password,
      1,
      this.id,
    ]);
  }

  delete() {
    const query = "DELETE FROM password WHERE id = ? AND user_id = ?";
    return db.query(query, [this.id, this.user_id]);
  }
};
