import {useContext} from 'react'
import LocationContext from '../context/LocationContext'
import TrackContext from '../context/TrackContext'
import { navigate } from '../navigationRef' 

export default () => {
  const {createTrack} = useContext(TrackContext);
  const {locations,trackName,reset} = useContext(LocationContext);

  const saveTrack = async () => {
      await createTrack(trackName,locations);
      reset();
      navigate("TrackList");

  }

  return [saveTrack];
};