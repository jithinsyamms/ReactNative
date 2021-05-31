import React,{useContext} from 'react'
import {View,StyleSheet} from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import AuthContext from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = () =>{

  const {signIn,errorMessage,clearErrorMessage} = useContext(AuthContext);

  return(
    <View style={styles.container}>

    <NavigationEvents onWillFocus = {clearErrorMessage} />
  
    <AuthForm 
    headerText = "Sign In for Tracker" 
    errorMessage = {errorMessage}
    submitButtonText ="Sign In"
    onSubmit = { ({email,password}) => signIn({email,password}) }
    /> 
    
    <NavLink 
         text = "Don't have an account? Go back to sign up"
         routeName = "Signup"
       />
      
  </View>

  );
}

SigninScreen.navigationOptions = () => {
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
export default SigninScreen;