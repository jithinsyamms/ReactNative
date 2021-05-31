import React,{useContext} from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import LocationContext from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  
  const {recording ,locations, trackName,startRecording, stopRecording, changeName} = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input placeholder="Enter name"
        value = {trackName}
        onChangeText = {changeName}
        />
      </Spacer>
      <Spacer>
      {
       (recording) ? <Button title="Stop Recording" onPress = {stopRecording}/>
       :<Button title="Start Recording" onPress = {startRecording}/>
      }
      </Spacer>
      <Spacer>
      {
        !recording && locations.length > 0 ? <Button title="Save Recording" onPress = {saveTrack}/> :null
      }
      </Spacer>
    </>
  );
};

export default TrackForm;
