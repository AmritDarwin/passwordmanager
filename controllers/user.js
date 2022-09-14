const User = require('../models/user');

exports.login = (req, res) => {
    res.render('login', { pageTitle: 'Login' });
}

exports.validateLogin = (req, res) => {
    const { username, password } = req.body;
    const user = new User(null, username, password);
    user.validateLogin().then(([row]) => {
        if (!row) {
            const response = {
                type: 'error',
                message: 'No user Found!'
            };
            res.json(response); 
        }
        if (row[0].password !== password) {
            const response = {
                type: 'error',
                message: 'Incorrect Password'
            }
            res.status(200).json(response);
        }
        const usr = { type: 'success', token: row[0].id, user: row[0] }
        res.json(usr);
    }).catch(err => res.json(err));
}

exports.checkLogin = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    var token = req.headers.authorization;
    token = token.replace('Bearer ', '');
    const user = new User(token, null, null);
    user.checkLogin().then(([row]) => {
        if (!row) {
            const response = {
                type: 'error',
                message: 'User Not   Found!',
                data: null
            };
            res.status(404).json(response);
        }
        const response = {
            type: 'success',
            message: 'User Found',
            data: row[0]
        };
        res.status(200).json(response);
    }).catch(err => res.json(err));
}

exports.register = (req, res) => {
    res.render('register', { pageTitle: 'Register' })
}

exports.registerUser = (req, res) => {
    const { username, password } = req.body;
    const user = new User(username, password);
    user.registerUser().then(res => res.render('/login')).catch(err => console.log(err));
}
