import React,{useContext} from 'react'
import {View,StyleSheet} from 'react-native'
import AuthContext from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = ({navigation}) =>{

  const {signUp,errorMessage,clearErrorMessage} = useContext(AuthContext);
  
  return(
      <View style={styles.container}>

        <NavigationEvents onWillFocus = {clearErrorMessage} />
         
        <AuthForm 
        headerText = "Sign Up for Tracker" 
        errorMessage = {errorMessage}
        submitButtonText ="Sign Up"
        onSubmit = { ({email,password}) => signUp({email,password}) }
        /> 
        <NavLink 
         text = "Already have an account? Sign in instead!"
         routeName = "Signin"
       />
          
      </View>
  );
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false
    };
};

const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent:'center',
  marginBottom:250
 }
});
export default SignupScreen;