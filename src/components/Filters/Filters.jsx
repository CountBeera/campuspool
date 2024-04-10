import React, { useState } from 'react';

const Filters = ({theme, setTheme}) => {
  const [filters, setFilters] = useState({
    numberOfPeople: '',
    vehicleType: '',
    price: '',
    date: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full">
      <form>
        <label className="block mb-2" htmlFor="numberOfPeople">Number of People</label>
        <input className="w-full mb-4 p-2 border rounded" type="number" min="0" name="numberOfPeople" onChange={handleChange} />

        <label className="block mb-2" htmlFor="vehicleType">Vehicle Type</label>
        <select className="w-full mb-4 p-2 border rounded" name="vehicleType" onChange={handleChange}>
          <option value="">Select a vehicle type</option>
          <option value="car">Car</option>
          <option value="car">Auto</option>
          <option value="van">Van</option>
        </select>

        <label className="block mb-2" htmlFor="price">Price</label>
        <input className="w-full mb-4 p-2 border rounded" type="number" min="0" name="price" onChange={handleChange} />

        <label className="block mb-2" htmlFor="date">Date</label>
        <input className="w-full mb-4 p-2 border rounded" type="date" name="date" onChange={handleChange} />

        <label className="block mb-2" htmlFor="numberOfPeople">Start Location</label>
        <input className="w-full mb-4 p-2 border rounded" type="text" name="startLocation" onChange={handleChange} />

        <label className="block mb-2" htmlFor="numberOfPeople">Drop Location</label>
        <input className="w-full mb-4 p-2 border rounded" type="text" name="dropLocation" onChange={handleChange} />

      </form>
    </div>
  );
};

export default Filters;
