// our-domain.com/new-meetup
import { Fragment,useState } from 'react';
import Head from 'next/head';
import MeetupList from '../../components/meetups/MeetupList';
import classes from '../../components/meetups/MeetupList.module.css';

let priceArr;
let locArr;
let tenantArr;
let aptArr;
let locationQuery;
let tenantQuery;
let apartmentQuery;
let priceQuery;
let priceQueryArray=[];
let totQuery;
let data;
function NewMeetupPage(props) {
    const [sending, setSending] = useState(false);
    console.log(sending);
    console.log(props);
    const actualPriceList = [20000, 40000, 60000, 80000];

    const commonFunction = (array)=>{

        return array.map(price=>{
          const higherLim = actualPriceList.find(actPrice=>{
          return actPrice > price
        })
        if (higherLim){
          return [+price,higherLim]
        } else {
          return [+price]
        }
      }     
          )
      }
    if (typeof window !== "undefined"){
        console.log('inside window');
        const urlSearchParams = new URLSearchParams(window.location.search);
        priceArr = urlSearchParams.getAll("priceArr");
        tenantArr = urlSearchParams.getAll("tenantArr");
        locArr = urlSearchParams.getAll("locArr");
        aptArr = urlSearchParams.getAll("aptArr");
        console.log(priceArr);
        console.log(tenantArr);
        console.log(locArr);
        console.log(aptArr);

        locationQuery = {price : {$in : [...locArr]}};
         tenantQuery = {tenant : {$in : [...tenantArr]}};
         apartmentQuery = {apartment : {$in : [...aptArr]}};
         console.log(locationQuery);
         console.log(tenantQuery);
         console.log(apartmentQuery);
         const searchArray = commonFunction(priceArr);
 console.log(searchArray);
      searchArray.forEach((element,i) => {
          console.log(element);
        if (element.length > 1){
          priceQueryArray[i] = {$and :[{"$expr" : {"$gte" : [{"$toInt" :"$location"} , element[0]]}},
        {"$expr" : {"$lte" : [{"$toInt" :"$location"} , element[1]]}}
        ]} 
        }else {
          priceQueryArray[i] ={"$expr" : {"$gte" : [{"$toInt" :"$location"} , 80000]}}
        }
      });
   priceQuery = {$or :[...priceQueryArray]}
   console.log(priceQuery);

     totQuery = {$and:[priceQuery,locationQuery,tenantQuery,apartmentQuery]};

     async function addMeetupHandler() {
        const response = await fetch('/api/mongo-query', {
          method: 'POST',
          body: JSON.stringify(totQuery),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        
        data = await response.json();
        console.log(data);
        setSending(true);
    
       
      }
      addMeetupHandler();

    }
     
 

 
  
  return (
    <Fragment>
      <Head>
        <title>Search Results</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

      </Head>
      
      {sending && <div className={classes.mDiv}><MeetupList meetups={data.result.map((meetup) => ({
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
        
      }))} /></div>}
      {!sending && <div className={classes.mDiv}><p>Searching....</p></div>}
    </Fragment>
  );
}

export default NewMeetupPage;


