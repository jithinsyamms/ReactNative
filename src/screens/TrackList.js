import React,{useContext} from 'react'
import { FlatList } from 'react-native'
import {ListItem} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {NavigationEvents} from 'react-navigation'
import TrackContext from '../context/TrackContext'

const TrackList = ({navigation}) =>{
  const {tracks,fetchTracks} = useContext(TrackContext);
  return(
      <>  
        <NavigationEvents onWillFocus = {fetchTracks}/>
        <FlatList 
          data = {tracks}
          keyExtractor = {track => track._id }
          renderItem = {({item}) => {
            return(
              <TouchableOpacity onPress = {() => navigation.navigate("TrackDetail",{_id:item._id})}>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
              
            )
          }}
        />
        
          
      </>

  );
}

TrackList.navigationOptions = {
  title:"Tracks"
};

export default TrackList;