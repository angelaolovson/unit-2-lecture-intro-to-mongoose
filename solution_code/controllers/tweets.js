const express = require('express');
const router = express.Router();
// import the Tweet module
const Tweet = require("../models/tweet")



// async or await(async:manege promises)

// Create 
router.post('/', async (req, res) => {
	console.log("req.body",req.body)
	res.send(req.body);
});

// Index
router.get('/', async (req, res) => {
	res.send('tweet index route');
});

// Seed
router.get('/seed', async (req, res) => {
	res.redirect('tweet seed route');
});

// Show
router.get('/:id', async (req, res) => {
	res.send('tweet show route');
});

// Delete
router.delete('/:id', async (req, res) => {
	res.send('tweet delete route');
});

// Update
router.put('/:id', async (req, res) => {
	res.send('tweet update route');
});

module.exports = router;
