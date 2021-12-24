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

    const result = await meetupsCollection.find(data).toArray();


    client.close();

    res.status(201).json({...result,id: result._id.toString()});
  }
}
//   else 
//   {
    
//     console.log('inside api')

//   const client2 = await MongoClient.connect(
//     'mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority'
//   );
//   const db2 = client2.db();
//   const price1 = 60100;
//   const ar = [{$and :[{"$expr" : {"$gt" : [{"$toInt" :"$location"} , 59000]}},
//   {"$expr" : {"$lt" : [{"$toInt" :"$location"} , price1]}}
//   ]},
//   {$and :[{"$expr" : {"$gt" : [{"$toInt" :"$location"} , 58000]}},
//   {"$expr" : {"$lte" : [{"$toInt" :"$location"} , 59000]}}
//   ]}]
//   const query2= [{$or :[...ar]},
// {price : {$in : ["Amsterdam"]}}


// ]

//   const meetupsCollection2 = db2.collection('meetups');
//   const query = {$and:query2};
// console.log(query);

//   // const result2 = await meetupsCollection2.find({"$expr" : {"$gt" : [{"$toInt" :"$location"} , 59000]}}).toArray();
//   const result2 = await meetupsCollection2.find(query).toArray();

//   console.log(result2);

//   client2.close();

// }}
export default handler;
