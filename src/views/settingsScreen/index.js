import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image, Dimensions, Button,TouchableOpacity,} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'react-native-firebase';





const SCREEN_WIDTH = Dimensions.get("window").width;
const screen_height = Dimensions.get("window").height;


const list = [
    {
        title: 'Wijzig naam',
        icon: 'person',
        url: 'changeUserNameScreen',
      },

    {
      title: 'Wachtwoord wijzigen',
      icon: 'lock-outline',
      url: 'changeUserPasswordSettings',
    },    
  ]

class settingsScreen extends Component {
    

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            this.props.navigation.navigate('Login');
        } catch (e) {
            console.log(e);
        }
    }

 

  render() {

      return (
        <ScrollView>
          <View style={styles.container}>
          {
            list.map((item, i) => (
                <TouchableOpacity  onPress={() => this.props.navigation.navigate(item.url)}>
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{ name: item.icon }}
                        bottomDivider
                        chevron
                    />
                </TouchableOpacity>
            ))
   
        }
        <View style={styles.afterList}>
            <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                <Text style={styles.buttonText}>Uitloggen</Text>
             </TouchableOpacity>
        </View>

        <Text style={styles.afterTitleText}>Een app van</Text>
        <Image style={styles.companyImage} source={require('../../assets/images/png/LOGO_PIXELPROS.png')} />
          </View>
      </ScrollView>
      );
      }
  }

  const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        paddingBottom: 0,
    },
    afterList:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        marginTop:'25%'
    },  
    button: {
 
        marginBottom: 20,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#3F494B',
        borderWidth: 1,
        borderRadius: 50,
        width: 200,
        marginTop: 250,
        
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    afterTitleText:{
        textAlign: 'center',
        fontStyle:'italic',
        color:'#B8BABA',
        marginTop: '22%'
    },
    companyImage:{
        marginTop: 20,
        width: 150,
        height: 34,

        marginLeft: '30%' ,
        marginBottom: 20
    },
  });
  
  export default settingsScreen;