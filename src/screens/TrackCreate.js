import React,{useEffect,useState,useContext} from 'react'
import {StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView,withNavigationFocus} from 'react-navigation'
import Map from '../components/Map'
import TrackForm from '../components/TrackForm'
import {requestForegroundPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location'
import LocationContext from '../context/LocationContext'
import {FontAwesome} from '@expo/vector-icons'

const TrackCreate = ({isFocused}) => {

  const {addLocation,recording} = useContext(LocationContext);
  const [err,setErr] = useState(null);
  let subscriber;
  

  useEffect(() => {

    const startWatching = async () => {
    
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error('Location permission not granted');
        }
        
         subscriber = await watchPositionAsync({
            accuracy:Accuracy.BestForNavgation,
            timeInterval:1000,
            distanceInterval:10
          }, (location) => {
             addLocation(location);
          });
        }  
       catch (e) {
        setErr(e);
      }
    };
    
    if(isFocused){
      startWatching();
    }
    else{
      if(subscriber){
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if(subscriber){
        subscriber.remove();
      }
    }
  },[isFocused,recording]);
  
  
  
  return(
      <SafeAreaView forceInset={{top:'always'}}>
          <Text h3>Create a Track</Text>
          <Map/>
          {err ? <Text h3> please enable location</Text> :null}
          <TrackForm />
      </SafeAreaView>

  );
}

TrackCreate.navigationOptions = {
 title:"Add track",
 tabBarIcon:<FontAwesome name="plus" size = {20}/>
};

const styles = StyleSheet.create({

});
export default withNavigationFocus(TrackCreate);