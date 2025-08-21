const express = require("express");
const router = express.Router();

//controller imports
const articleController = require("../controllers/articleController");

//Routes
router.post("/articles", articleController.createArticle);
router.get("/articles", articleController.getAllArticles);  
router.get("/articles/:id", articleController.getArticleById);
router.delete("/articles/:id", articleController.deleteArticle);

module.exports = router;
// Exporting the router to be used in the main server file