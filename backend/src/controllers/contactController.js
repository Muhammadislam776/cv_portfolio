const Contact = require("../models/Contact");

exports.sendContact = async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const savedContact = await Contact.create({ name, email, subject, message });
    res.status(200).json({ ok: true, data: savedContact });
  } catch (err) {
    next(err);
  }
};
