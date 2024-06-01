
import { connectDB } from './data/database.js'
import { app } from './app.js';
import router from './routes/user.js';

connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})