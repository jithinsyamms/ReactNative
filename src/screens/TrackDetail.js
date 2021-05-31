import React,{useContext} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import TrackContext from '../context/TrackContext'
import MapView,{Polyline} from 'react-native-maps';

const TrackDetail = ({navigation}) =>{
  const {tracks} = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = tracks.find(track =>  track._id === _id);
  const initialCoords = track.locations[0].coords;
  
  return(
      <View>
          <Text style = {{fontSize:48}}>{track.name} </Text>
          <MapView style = {styles.map}
          initialRegion={{
            ...initialCoords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}>
            <Polyline coordinates = {track.locations.map(loc => loc.coords)}/>
          </MapView>
      </View>

  );
}
const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetail;