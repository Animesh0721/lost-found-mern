const Item = require('../models/Item');

// Add Item (Protected)
exports.addItem = async (req, res) => {
  try {
    const { itemName, description, type, location, date, contactInfo } = req.body;

    // Validate input
    if (!itemName || !description || !type || !location || !date || !contactInfo) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const item = await Item.create({
      user: req.user.id,
      itemName,
      description,
      type,
      location,
      date,
      contactInfo,
    });

    res.status(201).json({
      success: true,
      message: 'Item added successfully',
      item,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find().populate('user', 'name email');

    res.status(200).json({
      success: true,
      count: items.length,
      items,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('user', 'name email');

    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    res.status(200).json({
      success: true,
      item,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Item (Only owner)
exports.updateItem = async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    // Check if user is owner
    if (item.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to update this item' });
    }

    item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'Item updated successfully',
      item,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Item (Only owner)
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }

    // Check if user is owner
    if (item.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this item' });
    }

    await Item.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Item deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Search Items by name
exports.searchItems = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ success: false, message: 'Please provide a search query' });
    }

    const items = await Item.find({
      itemName: { $regex: name, $options: 'i' },
    }).populate('user', 'name email');

    res.status(200).json({
      success: true,
      count: items.length,
      items,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
