//import express
const express = require("express")
const app = express()
app.use(express.json())

// import md5
const md5 = require("md5")

//import model
const models = require("../models/index")
const paket = models.paket

//endpoint menampilkan semua data paket, method: GET, function: findAll()
app.get("/", (req,res) => {
    paket.findAll()
        .then(result => {
            res.json({
                paket : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.get("/:id_paket", (req, res) =>{
    paket.findOne({ where: {id_paket: req.params.id_paket}})
    .then(result => {
        res.json({
            paket: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

//endpoint untuk menyimpan data paket, METHOD: POST, function: create
app.post("/", (req,res) => {
    let data = {
        id_outlet : req.body.id_outlet,
        jenis : req.body.jenis,
        nama_paket : (req.body.nama_paket),
        harga : (req.body.harga),
        jenis : (req.body.jenis)
    }

    paket.create(data)
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

//endpoint mengupdate data paket, METHOD: PUT, function:update
app.put("/:id", (req,res) => {
    let param = {
        id_paket : req.params.id
    }
    let data = {
        id_outlet : req.body.id_outlet,
        jenis : req.body.jenis,
        nama_paket : (req.body.nama_paket),
        harga : (req.body.harga),
        jenis : (req.body.jenis)
    }
    paket.update(data, {where: param})
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

//endpoint menghapus data paket, METHOD: DELETE, function: destroy
app.delete("/:id", (req,res) => {
    let param = {
        id_paket : req.params.id
    }
    paket.destroy({where: param})
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




