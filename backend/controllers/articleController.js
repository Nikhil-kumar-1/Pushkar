const Article = require("../models/Article");

exports.createArticle = async(req, res)=>{
    try{
        const {title,link,summary,imageUrl, tags} = req.body;
        const article = new Article({title, link, summary, imageUrl, tags});
        await article.save();
        res.status(201).json({message: "Article created successfully", article});
    }catch(err){
        console.error("Error creating article:", err);
        res.status(500).json({message: "Internal server error"});
    }
}

//get all articles
exports.getAllArticles = async(req, res)=>{
    try{
        const articles = await Article.find().sort({createdAt: -1});
        res.status(200).json(articles);
    }catch(err){
        console.error("Error fetching articles:", err);
        res.status(500).json({message: "Internal server error"});
    }
}

//get article by id
exports.getArticleById = async(req, res)=>{
    try{
        const article = await Article.findById(req.params.id);
        if(!article){
            return res.status(404).json({message: "Article not found"});
        }
        res.status(200).json(article);
    }catch(err){
        console.error("Error fetching article:", err);
        res.status(500).json({message: "Internal server error"});
    }
}

//Delete article by id
exports.deleteArticle = async(req, res)=>{      
    try{
        const article = await Article.findByIdAndDelete(req.params.id);
        if(!article){
            return res.status(404).json({message: "Article not found"});
        }
        res.status(200).json({message: "Article deleted successfully"});
    }catch(err){
        console.error("Error deleting article:", err);
        res.status(500).json({message: "Internal server error"});
    }
}