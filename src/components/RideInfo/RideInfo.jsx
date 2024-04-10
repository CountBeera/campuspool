import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { app } from '../../firebase';
import { FirebaseError } from 'firebase/app';

const database = getDatabase(app);

const RideInfo = ({user, theme, setTheme}) => {
  const [ride, setRide] = useState({
    name:'',
    startLocation: '',
    dropLocation: '',
    date: '',
    numberOfPeople: '',
    price: ''
  });

  const handleChange = (e) => {
    setRide({ ...ride, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ride);
  };

  const putData = (key,data) => set(ref(database,key),data);

  console.log("user"  );
  console.log(user);

  const putDatanew = () => {
    ride["joined"] = [user["uid"]];
    putData("root/" + user["uid"],ride).then(() => {
      window.location.href = '/';
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-16">
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <label 
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} 
                htmlFor="name">
                Name
            </label>

            <input 
                className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${theme === 'dark' ? 'bg-gray-900 text-white focus:bg-gray-700' : 'bg-gray-200 text-gray-700 focus:bg-white'}`}
                id="name" 
                type="text" 
                name="name" 
                onChange={handleChange} />
          </div>
          <div className="w-full px-3">
            <label 
                className={`block uppercase tracking-wide text-xs font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} 
                htmlFor="start-location">
                Start Location
            </label>

            <input 
                className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${theme === 'dark' ? 'bg-gray-900 text-white focus:bg-gray-700' : 'bg-gray-200 text-gray-700 focus:bg-white'}`}
                id="start-location" 
                type="text" 
                name="startLocation" 
                onChange={handleChange} />
          </div>
          <div className="w-full px-3">
            <label 
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                htmlFor="drop-location">
              Drop Location
            </label>
            <input 
                className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${theme === 'dark' ? 'bg-gray-900 text-white focus:bg-gray-700' : 'bg-gray-200 text-gray-700 focus:bg-white'}`}
                id="drop-location" 
                type="text" 
                name="dropLocation" 
                onChange={handleChange} />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label 
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                htmlFor="date">
              Date
            </label>
            <input 
                className={`appearance-none block w-full border rounded py-3 px-4 leading-tight focus:outline-none ${theme === 'dark' ? 'bg-gray-900 text-white focus:bg-gray-700 focus:border-gray-500' : 'bg-gray-200 text-gray-700 focus:bg-white focus:border-gray-500'}`}
                id="date" 
                type="date" 
                name="date" 
                onChange={handleChange} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label 
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`} 
                htmlFor="number-of-people">
              Number of People
            </label>
            <input 
                className={`appearance-none block w-full border rounded py-3 px-4 leading-tight focus:outline-none ${theme === 'dark' ? 'bg-gray-900 text-white focus:bg-gray-700 focus:border-gray-500' : 'bg-gray-200 text-gray-700 focus:bg-white focus:border-gray-500'}`}
                id="number-of-people" 
                type="number" 
                name="numberOfPeople" 
                onChange={handleChange} />
          </div>
          <div className="w-full px-3 pt-2">
            <label 
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                htmlFor="drop-location">
              Preferred vehicle
            </label>
            <select 
              className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${theme === 'dark' ? 'bg-gray-900 text-white focus:bg-gray-700' : 'bg-gray-200 text-gray-700 focus:bg-white'}`}
              name="vehicleType" onChange={handleChange}>
              <option value="">Select a vehicle type</option>
              <option value="car">Car</option>
              <option value="car">Auto</option>
              <option value="van">Van</option>
            </select>
            {/* <input 
                className={`appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none ${theme === 'dark' ? 'bg-gray-900 text-white focus:bg-gray-700' : 'bg-gray-200 text-gray-700 focus:bg-white'}`}
                id="drop-location" 
                type="text" 
                name="dropLocation" 
                onChange={handleChange} /> */}
          </div>
          <div className="w-full px-3">
            <label 
                className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
                htmlFor="price">
              Price
            </label>
            <input 
                className={`appearance-none block w-full border rounded py-3 px-4 leading-tight focus:outline-none ${theme === 'dark' ? 'bg-gray-900 text-white focus:bg-gray-700 focus:border-gray-500' : 'bg-gray-200 text-gray-700 focus:bg-white focus:border-gray-500'}`}
                id="price" 
                type="number" 
                name="price" 
                onChange={handleChange} />
          </div>
          <div className="w-full px-3 mt-6">
            <button onClick={putDatanew}
                className={`w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'bg-blue-700 hover:bg-blue-900 text-white' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
                type="submit">
              Create Ride
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default RideInfo;
