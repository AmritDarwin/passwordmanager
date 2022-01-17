const express = require("express");
const path = require("path");

const userData = require("./routes/user");

const app = express();

const cors = require('cors');

app.set("view engine", "ejs");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userData.routes);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(5000);
