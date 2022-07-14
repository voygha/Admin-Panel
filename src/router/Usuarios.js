const express = require('express');
const router = express.Router();
const Usuario = require('../../models/usuario')
import { response } from 'express';
import fetch from 'node-fetch';
router.use('/', require('../router/router'))


//Add user to BD
router.post('/user/add', async(req, res) => {
    fetch('https:', {
            method: 'POST',
            body: JSON.stringify({
                nombre: req.body.nombre,
                password: req.body.password,
                email: req.body.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.text())
        .then((text) => {
            try {
                console.log(text);
                // The response was a JSON object
                const data = (JSON.parse(text)); // Try to parse the response as JSON
                //data.usuario.nombre
                //print to console status (True or False)
                console.log(data);
                if (data.ok == true) {
                    res.redirect('/sidebar_inicio');
                }
                if (data.ok == false) {
                    res.send('El usuario ya esta registrado');
                }
            } catch (err) {
                // The response wasn't a JSON object
                console.log(err);
            }
        });
});

//Method Login User
router.post('/user/login', (req, res) => {
    res.redirect('/sidebar_inicio');
    /*
    fetch('https:', {
            method: 'POST',
            body: JSON.stringify({
                password: req.body.password,
                email: req.body.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.text()) // Parse the response as text
        .then(text => {
            try {
                // The response was a JSON object
                const data = (JSON.parse(text)); // Try to parse the response as JSON
                //data.usuario.nombre
                //print to console status (True or False)
                console.log(data);
                if (data.ok == true) {
                    res.redirect('/sidebar_inicio');
                }
                if (data.ok == false) {
                    res.send('Usuario o clave incorrectos');
                }
            } catch (err) {
                // The response wasn't a JSON object
                console.log(err);
            }
        })*/
});

module.exports = router;