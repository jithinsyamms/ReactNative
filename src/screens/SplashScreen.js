import {useContext,useEffect} from 'react'
import AuthContext from '../context/AuthContext'


const SplashScreen = () =>{

    const {trySignIn} = useContext(AuthContext);
    useEffect(() => {
      trySignIn();
    },[]);  

    return null;
}

export default SplashScreen;