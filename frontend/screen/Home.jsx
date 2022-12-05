import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Home = () => {
    return (
        <> <View style={styles.main}>
            <View style={styles.card}>
                <Text style={styles.heading}>Create / Update User</Text>
                <View>
                    <Text style={styles.subhead1}>Enter Name</Text>
                    <TextInput style={styles.inputs} />
                    <Text style={styles.subhead2}>Enter Email</Text>
                    <TextInput style={styles.inputs} textContentType={"emailAddress"} />
                    <Text style={styles.subhead2}>Enter Password</Text>
                    <TextInput style={styles.inputs} secureTextEntry={true} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
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
        height: "55%",
    },
    heading: {
        fontSize: "30px",
        textAlign: "center",
        marginBottom: "2rem",
        color:"white"
    },
    inputs: {
        border: "1px solid white",
        backgroundColor: "white",
        marginRight: "0.2rem",
        marginLeft: "0.2rem",
        borderRadius: "3px",
        color:"white"
    },
    subhead1: {
        marginLeft: "0.2rem",
        marginBottom: "1rem",
        color:"white"
    },
    subhead2: {
        marginLeft: "0.2rem",
        marginBottom: "1rem",
        marginTop: "1rem",
        color:"white"
    },
});

export default Home