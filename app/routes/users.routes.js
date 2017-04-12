var express = require('express');
var router = express.Router();
var User = require('../models/user.model');

router.get('/', (req, res) => {
    User.find({})
        .then(users => {
            res.json(users);
        });
});

router.post('/', (req, res) => {
    console.log(req.body);
    User.create(req.body)
        .then(user => {
            res.json(user);
        }).catch(err => {
            console.log('err', err);
            res.end("Error occurred while adding user", err);
        });
});

router.put('/:id', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedUser => {
            res.json(updatedUser);
        }).catch(err => {
            res.end('Error occurred while updating user with id ' + req.params._id, err);
        })
});

router.get('/:id', (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            res.json(user);
        }).catch(err => {
            res.end('Error occurred while getting user with id ' + req.params.id, err);
        })
});

router.delete('/:id', (req, res) => {
    User.remove({ _id: req.params.id })
        .then(user => {
            res.json({status: 200, message: 'User deleted successfully'});
        }).catch(err => {
            res.end('Error occurred while deleting user with id ' + req.params.id, err);
        })
});

module.exports = router;