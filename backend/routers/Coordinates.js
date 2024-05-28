// // server.js
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// const initialTime = new Date('2024-05-19T20:40:00Z').getTime();
// const positions = [
//   { latitude: 32.22388827607175, longitude: 35.25495656949715, timestamp: new Date(initialTime + 0 * 5000).toISOString() },
//   { latitude: 32.22366038185282, longitude: 35.255406061662825, timestamp: new Date(initialTime + 1 * 5000).toISOString() },
//   { latitude: 32.22344160286514, longitude: 35.25579397957371, timestamp: new Date(initialTime + 2 * 5000).toISOString() },
//   { latitude: 32.22319677813792, longitude: 35.25621268460398, timestamp: new Date(initialTime + 3 * 5000).toISOString() },
//   { latitude: 32.22287642137864, longitude: 35.256891540922155, timestamp: new Date(initialTime + 4 * 5000).toISOString() },
//   { latitude: 32.22254043625088, longitude: 35.25742261900714, timestamp: new Date(initialTime + 5 * 5000).toISOString() },
//   { latitude: 32.22170046799454, longitude: 35.259060494586905, timestamp: new Date(initialTime + 6 * 5000).toISOString() },
//   { latitude: 32.22143349971231, longitude: 35.259548470674495, timestamp: new Date(initialTime + 7 * 5000).toISOString() },
//   { latitude: 32.22131108472888, longitude: 35.25981785808964, timestamp: new Date(initialTime + 8 * 5000).toISOString() }
// ];
// const cors = require('cors');
// app.use(cors());

// app.use(express.json());

// app.get('/positions', (req, res) => {
//   res.json(positions);
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
