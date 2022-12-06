import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Alert,TouchableOpacity } from 'react-native';
import { useState } from 'react';
const DeleteUser = () => {
  const [email, setemail] = useState("")
  const deleteUser = async () => {
    try {
      await fetch("http://localhost:5000/user/" + email, {
        method: 'DELETE',
        mode: 'cors',
      })
      Alert.alert("Congratulations :)", "User Deleted Succesfully !!!")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <View style={styles.card}>
        <Text style={styles.heading}>Delete User</Text>
        <View>
          <Text style={styles.subhead1}>Enter Email</Text>
          <TextInput style={styles.inputs} value={email} onChange={(e) => setemail(e.target.value)} />
          <TouchableOpacity style={styles.button} onPress={deleteUser}>
            <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
          </TouchableOpacity>
        </View>
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
    height: "33%",
    marginTop: "6rem",
    marginLeft: "1rem"
  },
  heading: {
    fontSize: "30px",
    textAlign: "center",
    marginBottom: "1rem",
    color: "white"
  },
  inputs: {
    border: "1px solid white",
    backgroundColor: "white",
    marginRight: "0.2rem",
    marginLeft: "0.2rem",
    borderRadius: "3px",
    height: 30
  },
  subhead1: {
    marginLeft: "0.2rem",
    marginBottom: "1rem",
    color: "white"
  },
  subhead2: {
    marginLeft: "0.2rem",
    marginBottom: "1rem",
    marginTop: "1rem",
    color: "white"
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "red",
    padding: "0.3rem",
    marginLeft: "0.2rem",
    marginRight: "0.2rem",
    borderRadius: "3px",
    height: 30
  }
});

export default DeleteUser