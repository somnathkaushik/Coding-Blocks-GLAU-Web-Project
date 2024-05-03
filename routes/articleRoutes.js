const express = require('express');
const Article = require('./../model/Article');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const article = await Article.find();
      res.status(200).json({
        success: true,
        data: article
      });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            error: err.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const newArticle = await new Article(req.body);
        await newArticle.save();
        res.json({
            data: newArticle
        });
    } catch (err) {
        res.json({
            status: "data cannot be send"
        });
    }
});

module.exports = router;