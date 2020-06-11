import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, ScrollView, Image, Dimensions,ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';


class loginScreen extends React.Component {
    state = {
        email: '',
        password: '',
        errorStatus: false,
        loading: false,
        loadingLogin: false,
    }

    errorNul = () => {
        this.setState({
            errorStatus: false
        }) 
    }


    handleLogin = () => {
        const { email, password } = this.state

        this.setState({ loading: true,loadingLogin:true });

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(
                () => {this.props.navigation.navigate('Home')}
               
            )
            .catch(() => {
                this.setState({ error: 'Authentication failed.', loadingLogin: false, loading: false,email:'',password:'' });
                alert('Helaas deze combinatie komt niet overeen.');
            });
        
      
    }


    

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Home' : 'SignUp')
          })

    }



    render() {
        return (
            <ScrollView keyboardShouldPersistTaps="always">

            <View style={styles.topBar}>
                
            </View>
         
            <View style={styles.textBar} >
            { this.state.loadingLogin ? 
                <View style={[styles.containerLoader, styles.horizontal]}>
        
                                   <ActivityIndicator size="large" color="#0000ff" />
                </View>
                :
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={inpassword => this.setState({password: inpassword, errorStatus: false }) }
                    placeholder='Wachtwoord'
                    secureTextEntry={true}
                />
                 {
                    this.state.errorStatus ? <Text style={styles.error}>Het wachtwoord komt niet overeen met de gebruiker</Text> : null
                 }
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={[this.state.loading ?  styles.loadingDiasbled: styles.loadingVisible]}>
                <TouchableOpacity style={[styles.buttonSignUp, styles.buttonMargin]}  onPress={() => this.props.navigation.navigate('forgetPassword')}>
                    <Text style={styles.buttonTextSignUp}>Wachtwoord vergeten?</Text> 
                </TouchableOpacity>
                </View>
                <View style={[this.state.loading ? styles.loadingVisible : styles.loadingDiasbled]}>
                    <ActivityIndicator size="large" color="#3F494B" />
                    <Text style={styles.loginText}>Login wordt gecontrolleerd</Text>
                </View>
                
                <View style={[this.state.loading ?  styles.loadingDiasbled: styles.loadingVisible]}>
                <TouchableOpacity style={styles.buttonSignUp}  onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={styles.buttonTextSignUp}>nog geen account?</Text> 
                    <Text style={styles.buttonTextSignUpBold}>Meld je aan</Text>
                </TouchableOpacity>

                </View>
            </View>
    }
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
        justifyContent: 'center',
        
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
        backgroundColor: '#294AAC',
  

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
    loadingVisible:{

    },
    loadingDiasbled:{
        display: 'none'
    },
    loginText:{
        fontStyle: 'italic'
    },
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        marginTop: '35%',
        paddingBottom: '5%'
      },
      horizontal: {
 
       
        padding: 10
      },

})

export default loginScreen