
const {model, Schema} = require('mongoose');

const recipeSchema = new Schema({
name: String,
ingredients: String,
instructions: String,
image: {
    type: String,
    default:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
}
// createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});




const Recipe = model("Recipe", recipeSchema)
module.exports = Recipe



















