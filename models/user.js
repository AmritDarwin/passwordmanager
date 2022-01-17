const db = require("../helpers/database");

module.exports = class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    validateLogin() {
        const query = "SELECT * from user WHERE username = ?";
        return db.query(query, [this.username]);
    }

    checkLogin() {
        const query = "SELECT * from user WHERE id = ?";
        return db.query(query,[this.id]);
    }

    save() {
        const query = "INSERT INTO user (username,password) VALUES (?,?)";
        return db.query(query, [this.username, this.password]);
    }
}