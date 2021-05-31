import React, {useState} from 'react'

const LocationContext = React.createContext();

export const LocationProvider = ({children}) => {

    const [recording,setRecording] = useState(false);
    const [locations,setLocations] = useState([]);
    const [currentLocation,setCurrentLocation] = useState(null); 
    const [trackName,setTrackName] = useState(""); 


    const startRecording = () => {
        setRecording(true);
    }
    const stopRecording = () => {
        setRecording(false);
    }
    const addLocation = (location) => {
      setCurrentLocation(location);
      if(recording){
        locations.push(location);
        setLocations(locations);  
      }
    }
    const changeName = (name) =>{
        setTrackName(name);
    }

    const reset = () => {
        setLocations([]);
        setTrackName("");
    }


    return (
        <LocationContext.Provider value = {
            {recording,locations,currentLocation,trackName,startRecording,stopRecording,addLocation,changeName,reset}
        }> 
            {children}
        </LocationContext.Provider>
    );
}

export default LocationContext;

