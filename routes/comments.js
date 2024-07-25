const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const commentsCollection = db.collection('comments');
    const comments = await commentsCollection.find().toArray();
    res.json(comments);
  } catch (err) {
    console.error('Error in GET /comments:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// GET id for comments
router.get('/:id', async (req, res) => {
  try {
    const db = getDb();
    const commentsCollection = db.collection('comments');
    const { id } = req.params;
    const comment = await commentsCollection.findOne({ _id: new ObjectId(id) });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(comment);
  } catch (err) {
    console.error('Error in GET /comments/:id:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST new comment
router.post('/', async (req, res) => {
  try {
    const db = getDb();
    const commentsCollection = db.collection('comments');
    const newComment = req.body;

    if (!newComment.userId || !newComment.text) {
      throw new Error('User ID and text are required.');
    }
    const result = await commentsCollection.insertOne(newComment);
    res.json(result.ops[0]);
  } catch (err) {
    console.error('Error in POST /comments:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// PATCH comments
router.patch('/:id', async (req, res) => {
  try {
    const db = getDb();
    const commentsCollection = db.collection('comments');
    const { id } = req.params;
    const updates = req.body;
    const result = await commentsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updates }
    );
    res.json(result);
  } catch (err) {
    console.error('Error in PATCH /comments/:id:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// DELETE comments
router.delete('/:id', async (req, res) => {
  try {
    const db = getDb();
    const commentsCollection = db.collection('comments');
    const { id } = req.params;
    const result = await commentsCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    console.error('Error in DELETE /comments/:id:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;