import { useRef,useState } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
const labelStyle= {
  display: "block",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  fontSize: "1.5rem",
}
const inputStyle= {
  display: "block",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  fontSize: "1.5rem",
  font: "inherit",
borderRadius: "4px",
border: "1px solid #ccc",
padding: "0.25rem",
width: "100%",
}
const titleInputRef = useRef();
const imageInputRef = useRef();
const addressInputRef = useRef();
const priceInputRef = useRef();
const locationInputRef = useRef();
const contactInputRef = useRef();
const apartmentInputRef = useRef();
const tenantInputRef = useRef();
const coolerInputRef = useRef();
const microwaveInputRef = useRef();
const refrigeratorInputRef = useRef();
const heaterInputRef = useRef();
const descriptionInputRef = useRef();

const [checkedState, setCheckedState] = useState(
  new Array(4).fill(false)
);

const chkbx = ["cooler","microwave","refrigerator","heater"];

const handleOnChange = (event) => {

      const coolIndex = chkbx.findIndex(location=>{
          return location == event.target.value ;
      })
      const updatedCheckedState = checkedState.map((item, index) =>
    index === coolIndex ? !item : item
  );
  
  setCheckedState(updatedCheckedState);
  
}
function submitHandler(event) {
  event.preventDefault();

  const enteredTitle = titleInputRef.current.value;
  const enteredImage = imageInputRef.current.value;
  const enteredAddress = addressInputRef.current.value;
  const enteredLocation = priceInputRef.current.value;
  const enteredPrice = locationInputRef.current.value;
  const enteredContact = contactInputRef.current.value;
  const enteredApartment = apartmentInputRef.current.value;
  const enteredTenant = tenantInputRef.current.value;
  const enteredCooler = checkedState[0];
  const enteredMicrowave = checkedState[1];
  const enteredRefrigerator = checkedState[2];
  const enteredHeater = checkedState[3];
  const enteredDescription = descriptionInputRef.current.value;

  const meetupData = {
    title: enteredTitle,
    image: enteredImage,
    address: enteredAddress,
    price: enteredPrice,
    location: enteredLocation,
    contact:enteredContact,
    apartment: enteredApartment,
    tenant:enteredTenant,
    cooler: enteredCooler,
    microwave:enteredMicrowave,
    refrigerator: enteredRefrigerator,
    heater:enteredHeater,
    description: enteredDescription,
  };

  props.onAddMeetup(meetupData);
}
return (
  <div className={classes.mainDiv}>
    <h3>Add A New Listing</h3>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'> Title</label>
        <input type='text' required id='title' ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>Apartment Image</label>
        <input type='url' required id='image' ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>Address</label>
        <input type='text' required id='address' ref={addressInputRef} />
      </div>
    
      <div className={classes.control}>
      <select className="mdb-select md-form" searchable="Search here.." name="location" id="location" ref={locationInputRef}
      style={{fontSize:"1.5rem"}}>
            <option value="" disabled selected>Choose your city</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Rotterdam">Rotterdam</option>
            <option value="Utrecht">Utrecht</option>
            <option value="Neimeghan">Neimeghan</option>
      </select>
      </div>
      <div className={classes.mainRow}>
      <div className="row" >
            <div className="form-check col-md-3" >
            <input type="checkbox" className="form-check-input" id="check1" name="cooler" value="cooler"  style={{fontSize:"1.5rem"}} 
            checked={checkedState[0]}
            onChange={handleOnChange}
            ref={coolerInputRef}/>
            <label className="form-check-label" for="check1"  style={{fontSize:"1.5rem"}}>Air Cooler</label>
            </div>
            <div className="form-check col-md-3" >
            <input type="checkbox" className="form-check-input" id="check2" name="microwave" value="microwave"  style={{fontSize:"1.5rem"}}
            checked={checkedState[1]}
            onChange={handleOnChange}
            ref={microwaveInputRef}/>
            <label className="form-check-label" for="check2"  style={{fontSize:"1.5rem"}}>Microwave</label>
            </div>
            <div className="form-check col-md-3" >
            <input type="checkbox" className="form-check-input" id="check3" name="refrigerator" value="refrigerator"  style={{fontSize:"1.5rem"}}
            checked={checkedState[2]}
            onChange={handleOnChange}
            ref={refrigeratorInputRef}/>
            <label className="form-check-label" for="check3"  style={{fontSize:"1.5rem"}}>Refrigerator</label>
            </div>
            <div className="form-check col-md-3" >
            <input type="checkbox" className="form-check-input" id="check4" name="heater" value="heater"  style={{fontSize:"1.5rem"}}
            checked={checkedState[3]}
            onChange={handleOnChange}
            ref={heaterInputRef} />
            <label className="form-check-label" for="check4"  style={{fontSize:"1.5rem"}}>Heater</label>
            </div>
        </div>
      </div>
      <div className="row" style={{margin:"0.5rem 1rem",justifyContent:"space-between"}}>
          <div className="form-group col-md-5">
              <label htmlFor='price' style={labelStyle}>Price</label>
              <input type='number' required id='price' style={inputStyle} ref={priceInputRef} />
          </div>
          <div className="form-group col-md-5" >
              <label htmlFor='contact' style={labelStyle}> Contact Number</label>
              <input type='text' required id='contact' style={inputStyle} ref={contactInputRef} />
          </div>
      </div>
      <div className="row" style={{margin:"0.5rem 1rem",justifyContent:"space-between"}}>
          <div className="form-group col-md-5" >
          {/* <div className={classes.control}> */}
      <select className="mdb-select md-form" searchable="Search here.." name="location" id="location" ref={apartmentInputRef}
      style={{fontSize:"1.5rem"}}>
            <option value="" disabled selected>Choose Apartment Type</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="4BHK">4BHK</option>
      </select>
      {/* </div>  */}
             
          </div>
          <div className="form-group col-md-5" >
          {/* <div className={classes.control}> */}
      <select className="mdb-select md-form" searchable="Search here.." name="location" id="location" ref={tenantInputRef}
      style={{fontSize:"1.5rem"}}>
            <option value="" disabled selected>Allowed Tenants</option>
            <option value="Bachelors">Bachelors </option>
            <option value="Family">Family</option>
            <option value="Students">Students</option>
            <option value="Any">Any</option>
           
      </select>
      {/* </div> */}
          </div>
      </div>
     
     
      <div className={classes.control}>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          required
          rows='5'
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </div>
    
    
 
);

}

export default NewMeetupForm;
