import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const upsertUser = async () => {
        try {
            const res = await fetch("http://localhost:5000/user/upsert", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            const data = await res.json();
            if (data) {
                Alert.alert("Cool :)", "Requst Completed !!!")
                setname("")
                setemail("")
                setpassword("")
            } else {
                Alert.alert("Oops :(", "Requst Not Completed !!!")
                setname("")
                setemail("")
                setpassword("")
            }

        } catch (error) {
            console.log(error)
        }
    }
    const getRoute = () => {
        navigation.navigate("Search User")
    }
    const deleteRoute = () => {
        navigation.navigate("Delete User")
    }
    return (
        <>
            <View style={styles.card}>
                <Text style={styles.heading}>Create / Update User</Text>
                <View>
                    <Text style={styles.subhead1}>Enter Name</Text>
                    <TextInput style={styles.inputs} value={name} onChange={(e) => setname(e.target.value)}  />
                    <Text style={styles.subhead2}>Enter Email</Text>
                    <TextInput style={styles.inputs} textContentType={"emailAddress"} value={email} onChange={(e) => setemail(e.target.value)} />
                    <Text style={styles.subhead2}>Enter Password</Text>
                    <TextInput style={styles.inputs} secureTextEntry={true} value={password} onChange={(e) => setpassword(e.target.value)} />
                    <TouchableOpacity style={styles.button} onPress={upsertUser}>
                        <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity style={styles.button2} onPress={getRoute}>
                        <Text style={{ color: "blue", textAlign: "center" }}>Get User</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={deleteRoute}>
                        <Text style={{ color: "red", textAlign: "center" }}>Delete User</Text>
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
        height: "60%",
        marginTop: "6rem",
        marginLeft: "1rem"
    },
    heading: {
        fontSize: "30px",
        textAlign: "center",
        marginBottom: "2rem",
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
        backgroundColor: "green",
        padding: "0.3rem",
        borderRadius: "3px",
        height: 30
    },
    button2: {
        marginTop: "3rem",
        padding: "0.3rem",
        borderRadius: "3px",
        height: 30,
    },
    button3: {
        marginTop: "3rem",
        padding: "0.3rem",
        marginLeft: "0.2rem",
        marginRight: "0.2rem",
        borderRadius: "3px",
        height: 30
    }
});

export default Home