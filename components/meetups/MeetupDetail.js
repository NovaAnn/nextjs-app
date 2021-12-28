import classes from './MeetupDetail.module.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      {/* <h1>{props.title}</h1> */}
      <address>{props.address}</address>
      <div className={classes.detailsFlex}>
       
        <h6><span><i className="fas fa-map-marker-alt" style={{color:"#77002e"}}></i></span>{props.price}</h6>
        <h6><span><i className="fas fa-male" style={{color:"#77002e"}}></i></span>{props.tenant}</h6>
          
        <h6><span><i className="fas fa-building" style={{color:"#77002e"}}></i></span>{props.apartment}</h6>
        <h6><span><i className="fas fa-tag" style={{color:"#77002e"}}></i></span>${props.location}</h6>
        <h6><span><i className="fas fa-phone" style={{color:"#77002e"}}></i></span>+31 {props.contact}</h6>
        
        </div>
        <p style={{backgroundColor:"#77002e",fontWeight:"600",fontStyle:"normal",color:"white"}}>Amenities</p>
        <div className={classes.mainRow}>
        <div className="row" style={{display:"flex",flexWrap:"wrap"}}>
            <div className="form-group col-md-3" >
               <div className={classes.imgItem} style={{opacity:`${props.cooler? 1 : 0.5}`}}>
                 <img src="https://cdn-icons-png.flaticon.com/128/816/816655.png" style={{height:"5rem",marginBottom:"1rem"}}/>
                 <span className={classes.imgSpan}>Air Cooler</span>
                 </div> 
            </div>
            <div className="form-group col-md-3" >
            <div className={classes.imgItem} style={{opacity:`${props.microwave? 1 : 0.5}`}}>
                 <img style={{height:"5rem",marginBottom:"1rem"}} src="https://t4.ftcdn.net/jpg/02/98/58/67/240_F_298586773_RJyugngszfs8bkVtcB7uZ4h7ooMRscjA.jpg"/>
                 <span className={classes.imgSpan}>Microwave</span>
                 </div> 
            </div>
            <div className="form-group col-md-3" >
               <div className={classes.imgItem} style={{opacity:`${props.refrigerator? 1 : 0.5}`}}>
                 <img style={{height:"5rem",marginBottom:"1rem"}} src="https://cdn-icons.flaticon.com/png/128/3441/premium/3441529.png?token=exp=1640653734~hmac=3202f1b204039889a14ea35743842cf3"/>
                 <span className={classes.imgSpan}>Refrigerator</span>
                 </div> 
            </div>
            <div className="form-group col-md-3" >
            <div className={classes.imgItem} style={{opacity:`${props.heater? 1 : 0.5}`}}>
                 <img style={{height:"5rem",marginBottom:"1rem"}} src="https://cdn-icons-png.flaticon.com/128/740/740973.png"/>
                 <span className={classes.imgSpan}>Heater</span>
                 </div> 
            </div>
        </div>
        </div>
        <p style={{backgroundColor:"#77002e",fontWeight:"600",fontStyle:"normal",color:"white"}}>About the Property</p>
     
      <div className="row">
      <div className="form-group col-md-12" >
      <p>{props.description}</p>
      </div>
      </div>
      

    </section>
  );
}

export default MeetupDetail;
