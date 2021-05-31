import React, {useState} from 'react'
import tracker from '../api/tracker'
//import AsyncStorage from "@react-native-community/async-storage";
import {AsyncStorage} from 'react-native'
import { navigate } from '../navigationRef' 

const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

const [signedIn,setSignedIn] = useState(false);
const [errorMessage,setErrorMessage] = useState("");


const signUp = async ({email,password}) => {
  try {
      const response = await tracker.post('/signup',{email, password})
      await AsyncStorage.setItem("token",response.data.token);
      setErrorMessage("");
      navigate('TrackList');
  } catch (error) {
      setErrorMessage(error.response.data);
  }
};
const signIn = async ({email,password}) => {
  try {
    const response = await tracker.post('/signin',{email, password})
    await AsyncStorage.setItem("token",response.data.token);
    setErrorMessage("");
    navigate('TrackList');
  } catch (error) {
    setErrorMessage(error.response.data.error);
  }
};
const signOut = async() => {
  await AsyncStorage.removeItem("token");
  setErrorMessage("");
  navigate("loginFlow");
};

const clearErrorMessage = () => {
   setErrorMessage("");
}

const trySignIn = async () => {

  const token = await AsyncStorage.getItem("token");
  if(token){
    navigate('TrackList');
  }
  else{
    navigate('loginFlow');
  }
}

return (
     <AuthContext.Provider value = {
         {signedIn, errorMessage, signUp,signIn,signOut,clearErrorMessage,trySignIn}
       }> 
         {children}
     </AuthContext.Provider>
   );
 }

export default AuthContext;

