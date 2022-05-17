const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.route');
const messagesRouter = require('./routes/messages.route');

// Config
const app = express();
const PORT = 3000;

// Middlewares
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms.`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// End Points
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});