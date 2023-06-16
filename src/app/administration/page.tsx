"use client";
import { useState } from 'react';
import Parse from "parse/dist/parse.min.js";

const page = () => {

  // Your Parse initialization configuration goes here
  console.log('process.env.PARSE_APPLICATION_ID', process.env.PARSE_APPLICATION_ID)
  const PARSE_APPLICATION_ID = process.env.PARSE_APPLICATION_ID;
  const PARSE_HOST_URL = process.env.PARSE_HOST_URL;
  const PARSE_JAVASCRIPT_KEY = process.env.PARSE_JAVASCRIPT_KEY;
  Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
  Parse.serverURL = PARSE_HOST_URL;

  const [B4aVehicle, setB4aVehicle] = useState(null);

  async function addB4aVehicle() {
    try {
      // create a new Parse Object instance
      const B4aVehicle = new Parse.Object('B4aVehicle');
      // define the attributes you want for your Object
      B4aVehicle.set('name', 'John');
      B4aVehicle.set('price', 100);
      B4aVehicle.set('color', 'white');
      // save it on Back4App Data Store
      await B4aVehicle.save();
      alert('B4aVehicle saved!');
    } catch (error) {
      console.log('Error saving new B4aVehicle: ', error);
    }
  }

  async function fetchB4aVehicle() {
    // create your Parse Query using the B4aVehicle Class you've created
    const query = new Parse.Query('B4aVehicle');
    // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
    query.equalTo('name', 'John');
    // run the query
    const B4aVehicle = await query.first();
    // access the Parse Object attributes
    console.log('B4aVehicle name: ', B4aVehicle.get('name'));
    console.log('B4aVehicle email: ', B4aVehicle.get('price'));
    console.log('B4aVehicle id: ', B4aVehicle.id);
    setB4aVehicle(B4aVehicle);
  }

  return (
    <div>
      <button onClick={addB4aVehicle}>Add B4aVehicle</button>
      <button onClick={fetchB4aVehicle}>Fetch B4aVehicle</button>
      { B4aVehicle !== null &&
        <div>
          <p>{`Name: ${B4aVehicle.get('name')}`}</p>
          <p>{`Email: ${B4aVehicle.get('price')}`}</p>
          <p>{`Email: ${B4aVehicle.get('color')}`}</p>
        </div>
      }
    </div>
  )
}

export default page