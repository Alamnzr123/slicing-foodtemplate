const userModel = require('../models/users.models')
//method
const userController = {
    //format pemanggila
    list: (req, res) => {
        userModel
        .selectAll()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        });
    },
    detail: (req, res) => {
        const data = {id : 1}
        res.json(data)
    },
    update: (req, res) => {
        const data = "data Ok"
        res.json(data)
    },
    add: (req, res) => {
        const data = ['']
        res.json(data)
    },
    hapus:  (req, res) => {
        const data = ""
        res.json(data)
    }
}

module.exports = userController;