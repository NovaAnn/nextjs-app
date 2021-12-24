import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script src="https://kit.fontawesome.com/fdba8ed509.js" crossorigin="anonymous"></script>
        
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        price={props.meetupData.price}
        location={props.meetupData.location}
        contact={props.meetupData.contact}
        tenant={props.meetupData.tenant}
        apartment={props.meetupData.apartment}
        cooler={props.meetupData.cooler}
        microwave={props.meetupData.microwave}
        refrigerator={props.meetupData.refrigerator}
        heater={props.meetupData.heater}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        price: selectedMeetup.price,
        location: selectedMeetup.location,
        contact: selectedMeetup.contact,
        apartment: selectedMeetup.apartment,
        tenant: selectedMeetup.tenant,
        cooler: selectedMeetup.cooler,
        microwave: selectedMeetup.microwave,
        refrigerator: selectedMeetup.refrigerator,
        heater: selectedMeetup.heater,
      },
    },
  };
}

export default MeetupDetails;
