const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let bookings = [];
let rooms = [
  { id: 101, type: 'Single Bed', price: 5000 },
  { id: 102, type: 'Double Bed', price: 8000 },
  { id: 103, type: 'Triple Bed', price: 10000 },
  { id: 104, type: 'AC Room', price: 12000 },
  { id: 105, type: 'Non-AC Room', price: 4000 }
];

app.get('/rooms', (req, res) => {
  const roomsWithStatus = rooms.map(room => ({
    ...room,
    booked: bookings.some(b => b.roomId === room.id)
  }));
  res.json(roomsWithStatus);
});

app.post('/book', (req, res) => {
  const { roomId, studentName, rollNumber } = req.body;

  if (bookings.some(b => b.roomId === roomId)) {
    return res.status(400).json({ message: 'Room already booked' });
  }

  bookings.push({ roomId, studentName, rollNumber });
  res.json({ message: 'Room booked successfully' });
});

app.get('/bookings', (req, res) => {
  res.json(bookings);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
