const Password = require("../models/password");

exports.index = (req, res) => {
  res.render("index", { pageTitle: "Password Manager" });
};

exports.addPassword = (req, res) => {
  res.render("add-password", { pageTitle: "Add Password" });
};

exports.postPassword = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const { website, email, password } = req.body;
  var token = req.headers.authorization;
  token = token.replace('Bearer ', '');
  const pass = new Password(null, token, website, email, password);
  pass.save()
    .then((err, row) => {
      const data = {
        type: 'success',
        message: 'Website details added successfully.'
      };
      res.status(200).json(data);
    })
    .catch((err) => {
      const data = {
        type: 'error',
        message: err.message
      };
      res.status(401).json(data);
    });
};

exports.passwordList = (req, res) => {
  var token = req.headers.authorization;
  token = token.replace('Bearer ', '');
  const passList = new Password(null, token, null, null, null);
  passList
    .get()
    .then(([row]) => {
      res.status(200).json(row)
    })
    .catch((err) => res.status(401).json(err));
};

exports.passwordDetails = (req, res) => {
  const id = req.params.id;
  const passDetails = new Password(id);
  passDetails
    .getWhere()
    .then(([row]) => {
      res.render("password-detail", {
        pageTitle: "Password List",
        password: row[0],
      });
    })
    .catch((err) => console.log(err));
};

exports.editPassword = (req, res) => {
  const { id } = req.params;
  const passDetails = new Password(id);
  passDetails
    .getWhere()
    .then(([row]) =>
      res.render("edit-password", {
        pageTitle: `Edit ${row[0].website}`,
        password: row[0],
      })
    )
    .catch((err) => console.log(err));
};

exports.updatePassword = (req, res) => {
  const { id } = req.params;
  const { website, email, password } = req.body;
  const pass = new Password(id, 1, website, email, password);
  pass
    .update()
    .then(() => {
      const data = {
        type: 'success',
        message: 'Website details Updated successfully.'
      };
      res.status(200).json(data)
    })
    .catch((err) => {
      const data = {
        type: 'error',
        message: 'Something went wrong.'
      };
      res.status(401).json(data);
    });
};

exports.deletePassword = (req, res) => {
  const { id } = req.params;
  const passDelete = new Password(id, 1);
  passDelete
    .delete()
    .then(() => {
      const data = {
        type: 'success',
        message: 'Deleted Successfully.'
      }
      res.status(200).json(data)
    })
    .catch((err) => {
      const data = {
        type: 'error',
        message: 'Please try again.'
      }
      res.status(401).json(data)
    });
};

exports.password = (req, res) => {
  const { id } = req.params;
  const pass = new Password(null, id, null, null, null)
  pass.getWhere().then(([row]) => res.status(200).json(row[0])).catch(err => res.status(401).json(err));
}
