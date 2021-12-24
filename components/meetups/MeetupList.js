import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import { Fragment, useState } from 'react';

function MeetupList(props) {
 
  return (
    <Fragment>
     
      <ul className={classes.list}>

{props.meetups.map((meetup) => (
  <MeetupItem
    key={meetup.id}
    id={meetup.id}
    image={meetup.image}
    title={meetup.title}
    address={meetup.address}
    price={meetup.price}
    contact={meetup.contact}
    apartment={meetup.apartment}
    tenant={meetup.tenant}
    location={meetup.location}
    cooler={meetup.cooler}
    microwave={meetup.microwave}
    refrigerator={meetup.refrigerator}
    heater={meetup.heater}
    description={meetup.description}

  />
))}
</ul>
    
      
    </Fragment>

    
  );
}

export default MeetupList;
