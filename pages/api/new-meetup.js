import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);


    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
  else {
    console.log('Do nothing');
  }
}

export default handler;
