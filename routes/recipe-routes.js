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


router.get("/community", async (req,res) => {
    try {
        const allRecipes = await Recipe.find();
        res.render("allRecipes.ejs", { allRecipes });
    } catch (error) {
        console.log(error);
    }
});


router.get("/:recipeId", async (req,res) => {
    try {
        const foundRecipe = await Recipe.findById(req.params.recipeId);
        res.render("recipe-read.ejs", { foundRecipe });
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id/update", async (req,res) => {
    try {
        const foundRecipe = await Recipe.findById(req.params.id);
        res.render("Recipe-Update.ejs", { foundRecipe });
    } catch (error) {
        console.log(error);
        res.send("Error");
    }
});

router.put("/:id", async (req,res) => {
    try {
        await Recipe.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/recipes/community");
    } catch (error) {
        console.log(error);
        res.send("Error updating");
    }
});
