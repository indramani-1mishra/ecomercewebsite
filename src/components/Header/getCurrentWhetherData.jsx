import axios from "axios";
import { useEffect, useState } from "react";

export default function GetCurrentWeatherData({ lat, lon }) {
 const [currentLocation,SetCurrentLocation] = useState('');
  async function getCurrentLocation() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a23626a616aafd4351c13b62ab0b22cc`
      );
     // console.log(response.data.name); // Log the response data
      SetCurrentLocation(response.data.name); 
    } catch (error) {
      console.error("Error fetching weather data: ", error); // Handle any errors
    }
  }

  useEffect(() => {
    getCurrentLocation(); // Call the async function when lat or lon changes
  }, [lat, lon]); // This will re-run the effect when lat or lon changes

  return (<>
     <span>{currentLocation}</span>
  </>);
}
