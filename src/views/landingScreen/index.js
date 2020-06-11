import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, ScrollView, Image, Dimensions, ImageBackground } from 'react-native';
import firebase from 'react-native-firebase';




class landingScreen extends React.Component {
    state = {
        email: '',
        password: '',
        errorStatus: false
        
    }
    

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Home' : 'Landing')
          })

    }



    render() {
        return (
            <View>
               <Text style={styles.title}>Epen{"\n"}Bronnenland</Text>
               <Text style={styles.text}>Een uniek bronnen belevingslandschap</Text>
            <View style={{width: '100%', height: '100%',alignItems: 'center'}}>
               <View style={styles.emptySpace} >

               </View>
                <TouchableOpacity style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={styles.buttonText}>Registreer</Text>
                </TouchableOpacity>
{/* 
                <TouchableOpacity style={styles.buttonAbout}  onPress={() => this.props.navigation.navigate('About')}>
                    <Text  style={styles.buttonAboutText} >Over deze app</Text>
                </TouchableOpacity>
*/}
                </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',     
        paddingTop: 800   
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        
        marginBottom: 20,
        paddingVertical: 10,
        alignItems: 'center',
        
        backgroundColor: '#3F494B',
        borderWidth: 1,
        borderRadius: 50,
        width: 200
    },
    buttonLogin: {
        
        marginBottom: 20,
        paddingVertical: 10,
        alignItems: 'center',
        
        backgroundColor: '#294AAC',

        width: 300
    },
    buttonRegister: {
        
        marginBottom: 20,
        paddingVertical: 10,
        alignItems: 'center',

        backgroundColor: '#6FD83A',

        width: 300
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    },
    topImage:{
        width: Dimensions.get('window').width,
        resizeMode: "cover",
        height: 211,
    },
    topBar:{
        padding: 32,
        backgroundColor: 'white',
        position: 'absolute',
        width: Dimensions.get('window').width,
        marginTop: 180,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textBar:{
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',

    },
    buttonSignUp:{
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 10,
        alignItems: 'center',

    },
    buttonTextSignUpBold:{
        fontWeight: 'bold',
    },
    buttonTextSignUp:{
        fontSize: 15,
        fontStyle: 'italic',
        color: '#3F494B'
    },
    buttonMargin:{
        marginTop: 0,
    },error:{
        color: '#B00020',
        textAlign: 'center'
    },
    emptySpace:{
        marginTop: '45%'
    },
    buttonAbout:{
        marginTop: 20
    },
    buttonAboutText:{
        color: 'white'
    },
    title:{
        paddingLeft: 30,
        paddingTop: 30,
    fontSize: 43,
    fontWeight: 'bold',
    color: '#fff'
    },
    text:{
        paddingLeft: 30,
        fontSize: 22,
        color: 'white'
    }
})

export default landingScreen