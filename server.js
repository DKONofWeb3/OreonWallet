const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit-waitlist', (req, res) => {
  const email = req.body.email;
  const filepath = path.join(__dirname, 'waitlist.json');

  // Simple email validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email' });
  }

  let list = [];

  try {
    if (fs.existsSync(filepath)) {
      const raw = fs.readFileSync(filepath, 'utf8').trim();
      list = raw ? JSON.parse(raw) : [];
    }
  } catch (err) {
    console.error('Failed to read or parse waitlist.json:', err);
    list = [];
  }

  // Check for duplicate email
  if (list.find(entry => entry.email === email)) {
    return res.status(409).json({ message: 'Already registered' });
  }

  // Add new entry
  list.push({ email, date: new Date().toISOString() });

  try {
    fs.writeFileSync(filepath, JSON.stringify(list, null, 2));
    return res.status(200).json({ message: 'Added to waitlist' });
  } catch (err) {
    console.error('Failed to write waitlist:', err);
    return res.status(500).json({ message: 'Server error while saving email' });
  }
});

app.get('/api/waitlist', (req, res) => {
  const filepath = path.join(__dirname, 'waitlist.json');
  try {
    if (!fs.existsSync(filepath)) return res.json([]);
    const raw = fs.readFileSync(filepath, 'utf8').trim();
    const list = raw ? JSON.parse(raw) : [];
    res.json(list);
  } catch (err) {
    console.error('Error reading waitlist:', err);
    res.status(500).json({ error: 'Failed to read waitlist' });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});