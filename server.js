const express = require('express');
const path = require('path');
const app = express();

// Serve all static files (CSS, JS, images)
app.use(express.static(__dirname));

// Routing for your HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'chat.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/diet', (req, res) => {
  res.sendFile(path.join(__dirname, 'Diet.html'));
});

app.get('/workout', (req, res) => {
  res.sendFile(path.join(__dirname, 'Workout.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'product2.html'));
});

app.get('/store', (req, res) => {
  res.sendFile(path.join(__dirname, 'store.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'loginForm.html'));
});

app.get('/membership-detail', (req, res) => {
  res.sendFile(path.join(__dirname, 'membership_Detail.html'));
});

app.get('/membership', (req, res) => {
  res.sendFile(path.join(__dirname, 'memeber_Ship.html'));
});

app.get('/onthego', (req, res) => {
  res.sendFile(path.join(__dirname, 'onthe.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
