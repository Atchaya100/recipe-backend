const loginController = require('../controllers/LoginController.js');
const router=require('express').Router();
const recipeController = require('../controllers/RecipeController.js');
const commentController = require('../controllers/CommentController.js');
router.post("/createAccount", loginController.createAccount);
router.post('/login',loginController.checkLogin)
router.post('/createRecipe',loginController.verifyToken,recipeController.createRecipe)
router.post('/comment',loginController.verifyToken,commentController.createComment)
router.put('/updateRecipe/:id',loginController.verifyToken,recipeController.updateRecipe)
router.get('/findAll',recipeController.findAll)
router.get('/findComments/:id',commentController.getComments)
router.delete('/delete/:id',loginController.verifyToken,recipeController.deleteRecipe)
router.get('/find/:id',recipeController.findOne)
router.get('/findAuthor/:author',loginController.verifyToken,recipeController.findByAuthor)
module.exports=router