import { useRouter } from 'next/router';

import Card from '../ui/Card';
import 'font-awesome/css/font-awesome.min.css';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.detailsFlex}>
        <div className={classes.detailsFlexColumn}>
        <h6><span><i className="fas fa-map-marker-alt" style={{color:"#77002e"}}></i></span>{props.price}</h6>
        <h6><span><i className="fas fa-male" style={{color:"#77002e"}}></i></span>{props.tenant}</h6>
          </div>
          <div className={classes.detailsFlexColumn}>
        <h6><span><i className="fas fa-building" style={{color:"#77002e"}}></i></span>{props.apartment}</h6>
        <h6><span><i className="fas fa-tag" style={{color:"#77002e"}}></i></span>${props.location}</h6>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
