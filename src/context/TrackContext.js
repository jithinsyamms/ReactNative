import React,{useState} from 'react'
import tracker from '../api/tracker'

const TrackContext = React.createContext();

export const TrackProvider = ({children}) => {

   const [tracks,setTracks] = useState([]);
   const fetchTracks = async () => {
      try {
        const response = await tracker.get('/tracks');
        setTracks(response.data);
      } catch (error) {
          console.log("Error fetching tracks");
      }
      

   };
   const createTrack = async (trackName, locations) => {
     try {
        await tracker.post('/tracks',{name:trackName,locations})
     } catch (error) {
         console.log("error while creating");
     }  
     
   }

    
    return (
        <TrackContext.Provider value = {{tracks,fetchTracks,createTrack}}> 
            {children}
        </TrackContext.Provider>
    );
}

export default TrackContext;

