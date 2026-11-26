const express = require('express');
const User = require('./user');

const app = express();

app.use(express.json());

// endpoints basicos
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  res.status(200).json({ message });
});

// endpoints de usuarios
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// endpoint tdd
app.get('/api/greeting', (req, res) => {
  res.status(200).send('Greeting');
});

module.exports = app;