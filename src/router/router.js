const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();


// index page
router.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
        { name: 'Tux', organization: "Linux", birth_year: 1996 },
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});



// about page
router.get('/about', function(req, res) {
    res.render('pages/about');
});

// login page
router.get('/login', function(req, res) {
    res.render('pages/login');
});
// registro page
router.get('/registro', function(req, res) {
    res.render('pages/registro');
});
// prueba page
router.get('/prueba', function(req, res) {
    res.render('pages/prueba');
});
// sidebar_inicio
router.get('/sidebar_inicio', function(req, res) {
    res.render('pages/inicio/sidebar_inicio');
});

module.exports = router;