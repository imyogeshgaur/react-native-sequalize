import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';

const Login = () => {
    const LoginUser = async()=>{

    }
    return (
        <>
            <View style={styles.card}>
                <Text style={styles.heading}>Login Here</Text>
                <>
                    <Text style={styles.subhead1}>Enter Email</Text>
                    <TextInput style={styles.inputs} />
                    <Text style={styles.subhead2}>Enter Password</Text>
                    <TextInput style={styles.inputs} secureTextEntry={true} />
                    <TouchableOpacity style={styles.button}> 
                        <Text style={{color:"white",textAlign:"center"}}>Submit</Text>
                    </TouchableOpacity>
                </>
            </View>
            <StatusBar style="auto" />
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
    button:{
      marginTop:"3rem",
      backgroundColor:"red",
      padding:"0.3rem",
      marginLeft:"0.2rem",
      marginRight:"0.2rem",
      borderRadius: "3px",
    }
});

export default Login