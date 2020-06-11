import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, ScrollView, Image, Dimensions } from 'react-native';
import firebase from 'react-native-firebase';



class requestPasswordScreen extends React.Component {

    writeUserData(authData) {
        var today = new Date();
        firebase.database().ref('Users/'+ authData.user.uid).set({
            name: this.state.email,
            registered: today,
        });
    }

    handleSignUp = () => {
        const { email, password } = this.state
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((authData) => {
                this.writeUserData(authData);})
            .catch(error => console.log(error))
    }

    forgotPassword = () => {
        const { email } = this.state
        firebase.auth().sendPasswordResetEmail(email)
          .then(function (user) {
            alert('Controlleer je email...')
          }).catch(function (e) {
            console.log(e)
          })
          this.props.navigation.navigate('Login');
      }

    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always">
           
            <View style={styles.topBar}>
                
            </View>
            <View style={styles.textBar} >

            <View style={styles.container}>

                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />

                <TouchableOpacity style={styles.button} onPress={this.forgotPassword}>
                    <Text style={styles.buttonText}>Vraag aan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonSignUp, styles.buttonMargin]}  onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonTextSignUp}>Terug</Text> 
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#A87451',
        borderRadius: 50,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    },    topImage:{
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
    buttonTextSignUp:{
        fontStyle: 'italic',
    },
    buttonMargin:{
        marginTop: 0,
    }
})

export default requestPasswordScreen