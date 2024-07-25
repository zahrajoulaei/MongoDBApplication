const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

// GET all users
router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const usersCollection = db.collection('users');
    const users = await usersCollection.find().toArray();
    res.json(users);
  } catch (err) {
    console.error('Error in GET /users:', err.message);
    res.status(500).json({ error: err.message });
  }
});

//GET users based on id
router.get('/:id', async (req, res) => {
  try {
    const db = getDb();
    const usersCollection = db.collection('users');
    const { id } = req.params;
    const user = await usersCollection.findOne({ _id: new ObjectId(id) });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error in GET /users/:id:', err.message);
    res.status(500).json({ error: err.message });
  }
});

//POST new id
router.post('/', async (req, res) => {
  try {
    const db = getDb();
    const usersCollection = db.collection('users');
    const newUser = req.body;

    if (!newUser.name || !newUser.email) {
      throw new Error('Name and email are required.');
    }
    const result = await usersCollection.insertOne(newUser);
    res.json(result.ops[0]);
  } catch (err) {
    console.error('Error in POST /users:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// PATCH
router.patch('/:id', async (req, res) => {
  try {
    const db = getDb();
    const usersCollection = db.collection('users');
    const { id } = req.params;
    const updates = req.body;
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updates }
    );
    res.json(result);
  } catch (err) {
    console.error('Error in PATCH /users/:id:', err.message);
    res.status(400).json({ error: err.message });
  }
});

//DELETE 
router.delete('/:id', async (req, res) => {
  try {
    const db = getDb();
    const usersCollection = db.collection('users');
    const { id } = req.params;
    const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error('Error in DELETE /users/:id:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;