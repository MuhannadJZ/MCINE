const Recipe = require('../models/Recipe');
const router = require('express').Router();

router.get("/", (req,res) => {
    res.render("recipes.ejs");
});

module.exports = router;


router.get("/new", (req,res) => {
    res.render("recipes-create.ejs");
});

router.post("/new", async (req,res) => {
    try {
        if(req.body.image === '') req.body.image = undefined;
        await Recipe.create(req.body);
        res.redirect("/recipes/community");
    } catch (error) {
        console.log(error);
    }
});
