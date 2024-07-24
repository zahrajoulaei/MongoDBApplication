const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { getDb } = require('../db'); 

// GET for ejs 
router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const jewelryCollection = db.collection('jewelry');
    const jewelry = await jewelryCollection.find().toArray();
    res.render('index', { jewelry });
  } catch (err) {
    console.error('Error in GET /jewelry:', err.message);
    res.status(500).json({ error: err.message });
  }
});

//GET for id
router.get('/:id', async (req, res) => {
  try {
    const db = getDb();
    const jewelryCollection = db.collection('jewelry');
    const { id } = req.params;
    const jewelry = await jewelryCollection.findOne({ _id: new ObjectId(id) });
    if (!jewelry) {
      return res.status(404).json({ error: 'Jewelry not found' });
    }
    res.json(jewelry);
  } catch (err) {
    console.error('Error in GET /jewelry/:id:', err.message);
    res.status(500).json({ error: err.message });
  }
});

//POST
router.post('/', async (req, res) => {
  try {
    const db = getDb();
    const jewelryCollection = db.collection('jewelry');
    const newJewelry = req.body;
    console.log('Received Jewelry Data:', newJewelry);

    if (!newJewelry.name || !newJewelry.category || !newJewelry.price) {
      throw new Error('Name, category, and price are required.');
    }
    const result = await jewelryCollection.insertOne(newJewelry);
    console.log('Insert Result:', result);
    res.json(result.ops[0]);
  } catch (err) {
    console.error('Error in POST /jewelry:', err.message);
    res.status(400).json({ error: err.message });
  }
});

//PATCH

router.patch('/:id', async (req, res) => {
  try {
    const db = getDb();
    const jewelryCollection = db.collection('jewelry');
    const { id } = req.params;
    const updates = req.body;
    const result = await jewelryCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updates }
    );
    res.json(result);
  } catch (err) {
    console.error('Error in PATCH /jewelry/:id:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const db = getDb();
    const jewelryCollection = db.collection('jewelry');
    const { id } = req.params;
    const result = await jewelryCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    console.error('Error in DELETE /jewelry/:id:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;