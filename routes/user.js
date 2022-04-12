//import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import model
const model = require('../models/index');
const user = model.user

//endpoint menampilkan semua data user, method: GET, function: findAll()
app.get("/", (req,res) => {
    user.findAll()
        .then(result => {
            res.json({
                user : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.get("/:id_user", (req, res) =>{
    user.findOne({ where: {id_user: req.params.id_user}})
    .then(result => {
        res.json({
            user: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})


//endpoint untuk menyimpan data user, METHOD: POST, function: create
app.post("/", (req,res) => {
    let data = {
        nama : req.body.nama,
        username : req.body.username,
        password : md5(req.body.password),
        id_outlet: req.body.id_outlet,
        role : req.body.role
    }

    user.create(data)
        .then(result => {
            res.json({
                message: "data has been inserted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint mengupdate data user, METHOD: PUT, function:update
app.put("/:id", (req,res) => {
    let param = {
        id_user : req.params.id
    }
    let data = {
        nama : req.body.nama,
        username : req.body.username,
        password : md5(req.body.password),
        id_outlet: req.body.id_outlet,
        role : req.body.role
    }
    user.update(data, {where: param})
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//endpoint menghapus data user, METHOD: DELETE, function: destroy
app.delete("/:id", (req,res) => {
    let param = {
        id_user : req.params.id
    }
    user.destroy({where: param})
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

module.exports = app




