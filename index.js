// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import posts from './routers/posts.js';
// import mongoose from 'mongoose';

// const app = express();
// const PORT = process.env.port || 5000;

// const URI = 'mongodb+srv://sund1609:1ju4d5A5ejvMi3In@cluster0.ypla8qo.mongodb.net/?retryWrites=true&w=majority';

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
// app.use(cors());

// app.use('/posts', posts);

// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to DB');
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         })
//     }).catch( err => {
//         console.log('err', err);
//     })


import express from 'express';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use('/posts', posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });