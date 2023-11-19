const loginController = require('../controllers/LoginController.js');
const router=require('express').Router();
const recipeController = require('../controllers/RecipeController.js');
router.post("/createAccount", loginController.createAccount);
router.post('/login',loginController.checkLogin)
router.post('/createRecipe',loginController.verifyToken,recipeController.createRecipe)
router.put('/updateRecipe/:id',loginController.verifyToken,recipeController.updateRecipe)
router.get('/findAll',loginController.verifyToken,recipeController.findAll)
router.delete('/delete/:id',loginController.verifyToken,recipeController.deleteRecipe)
router.get('/find/:id',loginController.verifyToken,recipeController.findOne)
router.get('/findAuthor/:author',loginController.verifyToken,recipeController.findByAuthor)
module.exports=router