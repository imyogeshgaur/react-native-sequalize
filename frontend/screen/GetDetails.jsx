import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const GetDetails = () => {
  return (
    <>
          
    </>
  )
}

const styles = StyleSheet.create({
  main: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  card: {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      borderRadius: "9px",
      backgroundColor: "rgb(71, 73, 190)",
      width: "90%",
      height: "50%",
      marginTop:"6rem",
      marginLeft:"1rem"
  },
  heading: {
      fontSize: "30px",
      textAlign: "center",
      marginBottom: "3rem"
  },
  inputs: {
      border: "1px solid white",
      backgroundColor: "white",
      marginRight: "0.2rem",
      marginLeft: "0.2rem",
      borderRadius: "3px",
  },
  subhead1: {
      marginLeft: "0.2rem",
      marginBottom: "1rem"
  },
  subhead2: {
      marginLeft: "0.2rem",
      marginBottom: "1rem",
      marginTop: "1rem"
  },
});

export default GetDetails