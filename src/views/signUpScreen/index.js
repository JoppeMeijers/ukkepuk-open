import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, ScrollView, Image, Dimensions, Alert ,ActivityIndicator} from 'react-native';
import firebase from 'react-native-firebase';

class signUpScreen extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordControl: '',
        errorStatus: false,
        falseCurrentPassword: false,
        falseCurrentlength: false,
        falseCurrentcaptial: false,
        falseCurrentfields: false,
        falseName: false,
        falseEmail: false,
        falseCurrentEmailNotcorrect: false,
        loader: false,
        checkedMain: false,
        checkedPrivacy: false,
        falseCurrentMain: false,
        falseCurrentPrivacy: false,
        table: false,
        landscape: false
    }

    errorNul = () => {
        
    }

    writeUserData(authData) {

        Alert.alert( 'Welkom','Het account is succesvol aangemaakt',[{text: 'Verder'},]);
        var today = new Date();
        firebase.database().ref('Users/'+ authData.user.uid).set({
            name: this.state.name,
            email: this.state.email,
            registered: today,
            '1R1':{
                completeRoutes: 0,
                place: 'Epen',
                points: 0,
                questionsAnswered: 0,
            },
            maxQuestionPoint: 0,
            intro: false,
            profileImage:''
        });

       
        
    }

    handleSignUp = () => {
        const { passwordControl, password, name, email, checkedMain, checkedPrivacy } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(name === "" ){
            this.setState({
                falseName: true,
                falseEmail: false,
                loader: true

            })

        }
        else if(email === "" ||  reg.test(email) === false){
            this.setState({
                falseName: false,
                falseEmail: true,
                
            })
        }
         else{

        if(passwordControl === '' || password === ''){
            this.setState({
                password: '',
  
                passwordControl:'',
                falseCurrentPassword: true,
                falseCurrentlength: false,
                falseCurrentcaptial: false,
                falseCurrentfields: true,
            })
        }else{

     
        if( password === passwordControl){
            if( passwordControl.length > 5 && password.length > 5){
                if(/([A-Z]+)/g.test(password)){

                            firebase.auth()
                            .createUserWithEmailAndPassword(email, password)
                            .then((authData) => {
                                this.writeUserData(authData);})
                                .catch( (error) =>{
                                    Alert.alert(" "+ error);
                                })
                            this.setState({
                                loader:true,
                                falseCurrentPassword: false,
                                falseCurrentlength: false,
                                falseCurrentcaptial: false,
                                falseCurrentfields: false,
                                falseName: false,
                                falseEmail: false,
                            })
        


                }else{
                    this.setState({
                        password: '',
          
                        passwordControl:'',
                        falseCurrentPassword: false,
                        falseCurrentlength: false,
                        falseCurrentcaptial: true,
                        falseCurrentfields: false,
                        falseName: false,
                        falseEmail: false,
                        falseCurrentMain: false,
                        falseCurrentPrivacy: false,
                    })
                }
            }else{
                this.setState({
                
                    passwordControl:'',
                    falseCurrentPassword: false,
                    falseCurrentlength: true,
                    falseCurrentcaptial: false,
                    falseCurrentfields: false,
                    falseName: false,
                    falseEmail: false,
                    falseCurrentMain: false,
                    falseCurrentPrivacy: false,
                })
            }
       }else{
           this.setState({
               password: '',

               passwordControl:'',
               falseCurrentPassword: true,
               falseCurrentlength: false,
               falseCurrentcaptial: false,
               falseCurrentfields: false,
               falseName: false,
               falseEmail: false,
               falseCurrentMain: false,
               falseCurrentPrivacy: false,
           })
       }
}
        }  
    }

    

    render() {
        return (
         <ScrollView style={styles.scorllVert}>

            <View style={styles.topBar}>
                
            </View>

            <View style={styles.textBar} >
            { this.state.loader ? 
                    <View style={[styles.containerLoader, styles.horizontal]}>
                        <Text style={styles.loaderText}>Gegevens worden verwerkt.</Text>
                        <ActivityIndicator size="large" color="#2742B3" />
                    </View>
                :  
            <View style={styles.container}>
                 <View style={styles.textHead}>
                    <Text style={styles.textTitle}>Meld je nu aan!</Text>
                </View>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.name}
                    textContentType={'username'}
                    onChangeText={name => this.setState({ name })}
                    placeholder='Voor-/ Achternaam'
                />
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
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text style={styles.passwordText}>Het wachtwoord moet minimaal 1 hoofdletter bevatten, 1 cijfer en minimaal bestaan uit 6 karakters.</Text>
                                <TextInput
                    style={styles.inputBox}
                    value={this.state.passwordControl}
                    onChangeText={passwordControl => this.setState({passwordControl: passwordControl, errorStatus: false }) }
                    placeholder='Wachtwoord nogmaals'
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                

              {/*  <CheckBox title='Ik ga akkoord met de algemene voorwaarden' checked={this.state.checkedMain} onPress={() => this.handleMain() } />
                <CheckBox title='Ik ga akkoord met de privacy policy' checked={this.state.checkedPrivacy} onPress={() => this.handlePrivacy() }/> */}
                <View style={styles.errors}>
                    { this.state.falseName ? <Text style={{color: 'red', marginTop: '3%', marginBottom: '5%'}}>Er is geen naam ingevuld.</Text> : null}
                    { this.state.falseEmail ? <Text style={{color: 'red', marginTop: '3%', marginBottom: '5%'}}>Het e-mail adres klopt niet.</Text> :null}
                    { this.state.falseCurrentfields ? <Text style={{color: 'red', marginTop: '3%', marginBottom: '5%'}}>Er zijn velden niet ingevuld.</Text> : null}
                    { this.state.falseCurrentPassword ? <Text style={{color: 'red', marginTop: '3%', marginBottom: '5%'}}>De nieuwe wachtwoorden komen niet overeen, probeer het nog eens.</Text> : null}
                    { this.state.falseCurrentlength ? <Text style={{color: 'red', marginTop: '3%', marginBottom: '5%'}}>Het wachtwoord bevat minder van 6 karakters.</Text> : null}
                    { this.state.falseCurrentcaptial ? <Text style={{color: 'red', marginTop: '3%', marginBottom: '5%'}}>Het wachtwoord bevat geen hoofdletters.</Text> : null}
                    { this.state.falseCurrentMain ? <Text style={{color: 'red', marginTop: '3%', marginBottom: '5%'}}>Ga akkoord met de algemene voorwaarden om het proces af te ronden.</Text> : null}
                    { this.state.falseCurrentPrivacy ? <Text style={{color: 'red', marginTop: '3%', marginBottom: '5%'}}>Ga akkoord met de privacy policy om het proces af te ronden.</Text> : null}
                </View>
                
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={styles.buttonText}>Aanmelden</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonSignUp, styles.buttonMargin]}  onPress={() => this.props.navigation.navigate('Landing')}>
                    <Text style={styles.buttonTextSignUp}>Terug</Text> 
                </TouchableOpacity>
            </View> 
             }
            </View>
   
        </ScrollView>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
    
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        width: '85%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
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
        height: 105,
    },
    topBar:{
        padding: 32,
        backgroundColor: 'white',
        position: 'absolute',
        width: Dimensions.get('window').width,
        marginTop: 80,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
    },error:{
        color: '#B00020',
        textAlign: 'center'
    },
    scorllVert:{
        marginBottom: 20,
      },
      passwordText:{
        paddingLeft: '7%',
        paddingRight: '2%',
        marginBottom: '3%'
    },
    textHead:{
        marginTop: '3%',
        marginBottom: '4%'
    },
    textTitle:{
        fontSize: 22,
        fontWeight: 'bold'
    },
    errors:{
        paddingLeft: 30,
        paddingRight: 30,
    },
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        marginTop: '50%',
        paddingBottom: '15%'
      },
      horizontal: {
 
       
        padding: 10
      },
      loaderText:{
          textAlign: 'center',
          marginBottom: '5%'
      },
})

export default signUpScreen