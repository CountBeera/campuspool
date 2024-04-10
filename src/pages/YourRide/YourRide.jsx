import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import { getDatabase, ref, get } from "firebase/database";
import { BsFillPersonFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { RiSearchEyeFill } from "react-icons/ri";
import { BsFillCarFrontFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";

const YourRide = ({user, theme, setTheme}) => {

  const db = getDatabase();
  const ridesRef = ref(db, "root");

  const[rides,setRides] = useState([]);
  useEffect(()=> {
    get(ridesRef)
 .then((snapshot) => {
    if (snapshot.exists()) {
      setRides(Object.values(snapshot.val()));
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("Error reading data:", error);
  });
},[])
  
  console.log("Data:", rides);

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Navbar user={user} theme={theme} setTheme={setTheme}/>
      <div className="pl-4 min-h-80">
      {rides.filter((ride) => {
          return (ride["joined"].includes(user["uid"]));
        }).map((ride, index) => (
        <Card theme={theme} setTheme={setTheme}  key={index} ride={ride} />
      ))}
      </div>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default YourRide