import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../frontend/build')));
}

app.get('*', (req, res) => {
    // send OK status
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});
