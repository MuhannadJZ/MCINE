const Recipe = require('../models/Recipe');
const router = require('express').Router();

router.get("/", (req,res) => {
    res.render("recipes.ejs");
});

module.exports = router;
