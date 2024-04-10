import React from 'react';
import RideInfo from '../../components/RideInfo/RideInfo';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CreateImg from '../../assets/create.png'

const CreateRide = ({user,  theme, setTheme }) => {
//   const [ride, setRide] = useState({
//     startLocation: '',
//     dropLocation: '',
//     date: '',
//     numberOfPeople: '',
//     price: ''
//   });

//   const handleChange = (e) => {
//     setRide({ ...ride, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(ride);
//   };

  return (
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    <div className={`flex flex-col md:flex-row items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="w-full md:w-1/2 p-4 overflow-hidden">
        <img
      src={CreateImg}
      alt="Your description"
      className={`w-full h-64 object-contain mb-4 ${theme === 'dark' ? 'invert' : ''}`}
      style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
    />
        {/* <p className="text-center md:text-left">Your text goes here</p> */}
      </div>
      <RideInfo theme={theme} setTheme={setTheme} user={user} />
    </div>
    <Footer theme={theme} setTheme={setTheme}/>
    </>
  );
};

export default CreateRide;
