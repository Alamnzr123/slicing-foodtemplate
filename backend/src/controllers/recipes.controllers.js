const recipes = require('../models/recipes.models')
//method
const recipesController = {
    //format pemanggila
    list_recipes: (req, res) => {
        recipes
        .selectAll()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        });
    }
}

module.exports = recipesController;