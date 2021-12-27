import { Fragment,useState } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import classes from '../components/meetups/MeetupList.module.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import axios from 'axios';

import MeetupList from '../components/meetups/MeetupList';
let priceChanged=false;
let locationChanged=false;
let tenantChanged=false;
let apartmentChanged=false;
let refinedMeetups=[];
let priceQueryArray=[];
let totQuery;
let requiredTenants = [];
let requiredApartment = [];
let searchMode = false;




function HomePage(props) {
  const locations = props.locationArray.map(item=>{
    return item._id;
  })
  const priceList = props.priceArray.map(item=>{
    if (item._id == 'Other'){
      return 80000;
    } else{
      return item._id;
    }
    

  })

  const tenants = props.tenantArray.map(item=>{
    return item._id;
  })
  const apartment = props.apartmentArray.map(item=>{
    return item._id;
  })

  const [checkedState, setCheckedState] = useState(
    new Array(locations.length).fill(true)
);
  const [pcheckedState, psetCheckedState] = useState(
  new Array(priceList.length).fill(true)
);
const [tcheckedState, tsetCheckedState] = useState(
  new Array(tenants.length).fill(true)
);
const [acheckedState, asetCheckedState] = useState(
new Array(apartment.length).fill(true)
);

  const [search, setSearch] = useState(false);
  const [checking, setChecking] = useState(false);
  const actualPriceList = [20000, 40000, 60000, 80000];
  const commonFunction = (array)=>{
    return array.map(price=>{
      const higherLim = actualPriceList.find(actPrice=>{
      return actPrice > price
    })
    if (higherLim){
      return [price,higherLim]
    } else {
      return [price]
    }
  }     
      )
  }
  const priceArray = commonFunction(priceList);
 const submitHandler = ()=>{
 
   refinedMeetups = [];
   searchMode = true;
   setChecking(true);
   const requiredLocations = locations.filter((_,index) =>{
     return checkedState[index];
   })
   const requiredPrices = priceList.filter((_,index) =>{
    return pcheckedState[index];
  });
  if (tenants.length>0) {
    requiredTenants = tenants.filter((_,index) =>{
      return tcheckedState[index];
    })
  }
  if (apartment.length>0) {
  requiredApartment = apartment.filter((_,index) =>{
   return acheckedState[index];
 });
}
  
   const locationQuery = {price : {$in : [...requiredLocations]}};
   const tenantQuery = {tenant : {$in : [...requiredTenants]}};
   const apartmentQuery = {apartment : {$in : [...requiredApartment]}};
 
  
    const searchArray = commonFunction(requiredPrices);
 
      searchArray.forEach((element,i) => {
        if (element.length > 1){
          priceQueryArray[i] = {$and :[{"$expr" : {"$gte" : [{"$toInt" :"$location"} , element[0]]}},
        {"$expr" : {"$lte" : [{"$toInt" :"$location"} , element[1]]}}
        ]} 
        }else {
          priceQueryArray[i] ={"$expr" : {"$gte" : [{"$toInt" :"$location"} , 80000]}}
        }
      });
     const priceQuery = {$or :[...priceQueryArray]}
     

      totQuery = {$and:[priceQuery,locationQuery,tenantQuery,apartmentQuery]};
     

 
  async function addMeetupHandler() {
    const url = '/api/' + props.meetups[0].price;
    console.log(url);

    const resp1 = await axios({
      method: 'post',     //put
      url: url,
      headers: {'Content-Type': 'application/json'}, 
      data: JSON.stringify(totQuery)
    });
    console.log('RESP1');
    const responseData = await resp1.json();
   
    // const response = await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(totQuery),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }); 
    // const responseData = await response.json();
   if (responseData.result){
    refinedMeetups = responseData.result;
    setChecking(false);
    
   
    
   }
 
  }   

    addMeetupHandler();
 }
  const handleOnChange = (event) => {
    switch (event.target.name) {
      case 'location':{
        locationChanged = true;
        const locIndex = locations.findIndex(location=>{

            return location == event.target.value ;
        })
        const updatedCheckedState = checkedState.map((item, index) =>
      index === locIndex ? !item : item
    );
    
    setCheckedState(updatedCheckedState);
      }
      case 'tenant':{
        tenantChanged = true;
        const tenIndex = tenants.findIndex(location=>{

            return location == event.target.value ;
        })
        const tupdatedCheckedState = tcheckedState.map((item, index) =>
      index === tenIndex ? !item : item
    );
    
    tsetCheckedState(tupdatedCheckedState);
      }
      case 'apartment':{
        apartmentChanged = true;
        const aptIndex = apartment.findIndex(location=>{

            return location == event.target.value ;
        })
        const aupdatedCheckedState = acheckedState.map((item, index) =>
      index === aptIndex ? !item : item
    );
    
    asetCheckedState(aupdatedCheckedState);
      }
      case 'price':{
        priceChanged = true;
        const priceIndex = priceList.findIndex(location=>{
            return location == event.target.value ;
        })
        const pupdatedCheckedState = pcheckedState.map((item, index) =>
      index === priceIndex ? !item : item
    );
    
    psetCheckedState(pupdatedCheckedState);
      }
    }
    
    
  }
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script src="https://kit.fontawesome.com/fdba8ed509.js" crossorigin="anonymous"></script>
      
      
      </Head>
      <div className={classes.mainDiv}>
      <div className={classes.searchDiv}>
        {props.locationArray && (
          <div className={classes.searchItem}>
       
          <h5>Location</h5>
          {props.locationArray.map((item,index)=>(<span className={classes.indSpan}>
          <label className={classes.switch}>
            <input type="checkbox" name="location"
            value={item._id}
            checked={checkedState[index]}
            onChange={handleOnChange.bind(index)}/>
            <span className={classes.slider}></span>
        </label>
        <span className={classes.h3Span}>{item._id}</span>
        <span className={classes.h3Count}>{item.count}</span>
        </span>)) }
        </div>)} 
        {props.priceArray && (
          <div className={classes.searchItem}>
       
          <h5>Price</h5>
          {priceArray.map((item,index,arr)=>(<span className={classes.indSpan}>
          <label className={classes.switch}>
            <input type="checkbox" name="price"
            value={item[0]=="Other"?80000:item[0]}
            checked={pcheckedState[index]}
            onChange={handleOnChange.bind(index)}/>
            <span className={classes.slider}></span>
        </label>

        {item.length > 1 && <span className={classes.h3Span}>${item[0]} - ${item[1]}</span>}
        {item.length < 2 && <span className={classes.h3Span}>Greater than $80000</span>}

        <span className={classes.h3Count}>{props.priceArray[index].count}</span>
        </span>)) }
        </div>)} 
        
{props.tenantArray && props.tenantArray[0]._id && (
          <div className={classes.searchItem}>
       
          <h5>Tenant Allowed</h5>
          {props.tenantArray.map((item,index)=>(<span className={classes.indSpan}>
          <label className={classes.switch}>
            <input type="checkbox" name="tenant"
            value={item._id}
            checked={tcheckedState[index]}
            onChange={handleOnChange.bind(index)}/>
            <span className={classes.slider}></span>
        </label>
        <span className={classes.h3Span}>{item._id}</span>
        <span className={classes.h3Count}>{item.count}</span>
        </span>)) }
        </div>)} 
        {props.apartmentArray && props.apartmentArray[0]._id && (
          <div className={classes.searchItem}>
       
          <h5>Apartment Type</h5>
          {props.apartmentArray.map((item,index)=>(<span className={classes.indSpan}>
          <label className={classes.switch}>
            <input type="checkbox" name="apartment"
            value={item._id}
            checked={acheckedState[index]}
            onChange={handleOnChange.bind(index)}/>
            <span className={classes.slider}></span>
        </label>
        <span className={classes.h3Span}>{item._id}</span>
        <span className={classes.h3Count}>{item.count}</span>
        </span>)) }
        </div>)}
       
      <button type="button" onClick={submitHandler}>Search</button>
        
        

      </div>
     
      {!checking && refinedMeetups && refinedMeetups.length > 0 && <MeetupList meetups={refinedMeetups} />}
      {!searchMode && <MeetupList meetups={props.meetups} />}
      {!checking && searchMode && refinedMeetups && refinedMeetups.length < 1 && <div className={classes.pDiv}><p>No Results Found</p></div>}
      {checking && searchMode && refinedMeetups.length < 1 && <div className={classes.pDiv}><p>Searching...</p></div>}


      </div>
     
    </Fragment>
  );
}


export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://NovaAnn:kwmwBi9wmLJ0nYBw@cluster0.nn0w8.mongodb.net/myNextDatabase?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();
  const result2 = await meetupsCollection.aggregate([{$project: { title: 1, image: 1,item: 1,address: 1,price: 1,location: 1,tenant: 1,apartment: 1,description: 1,priceInt: { $toInt: "$location" } }},
    {
     
      $facet: {
        "categorizedByLocation": [
      
          { $sortByCount: "$price" }
        ],
        "categorizedByTenant": [
      
          { $sortByCount: "$tenant" }
        ],
        "categorizedByApartment": [
      
          { $sortByCount: "$apartment" }
        ],
          
        "categorizedByPrice": [
          { $match: { price: { $exists: 1 } } },
          {
            $bucket: {
              groupBy: "$priceInt",
              boundaries: [  0, 20000, 40000, 60000, 80000 ],
              default: "Other",
              output: {
                "count": { $sum: 1 },
                "titles": { $push: "$title" }
              }
            }
          }
        ],
        
      }
    }
  
  ]
    
       
    );
    const yourData = await result2.next();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        price: meetup.price,
        contact:meetup.contact,
        apartment: meetup.apartment,
        tenant:meetup.tenant,
        location: meetup.location,
        cooler:meetup.cooler,
        microwave: meetup.microwave,
        refrigerator:meetup.refrigerator,
        heater: meetup.heater,
        description: meetup.description,
      
        id: meetup._id.toString(),
        
      })),
      priceArray:yourData.categorizedByPrice,
    locationArray:yourData.categorizedByLocation,
    tenantArray:yourData.categorizedByTenant,
    apartmentArray:yourData.categorizedByApartment,
    },
    
    revalidate: 1,
  };
}

export default HomePage;
