import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image,Dimensions, ProgressBarAndroid,TouchableOpacity, Modal,} from 'react-native';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },

]

const SCREEN_WIDTH = Dimensions.get("window").width;
const screen_height = Dimensions.get("window").height ;
class informationScreen extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
  render() {
    return (

        <ScrollView style={styles.scorllVert}>
            <View style={styles.container}> 
            <View>
                <Text style={{padding:'5%', fontWeight:'800',fontSize: 22}}>Locatiegegevens</Text>
                  <Image source={require('../../assets/images/png/locatie-foto.png')} style={{width: SCREEN_WIDTH, height:400, marginTop: '4%'}}/>
                  <ListItem key={1} title={'Landweringstraat 112, 6133 JR, Sittard'} onPress={() => console.log('works')} leftIcon={{ name: 'place'}} bottomDivider />
                  <ListItem key={1} title={'06-10090840'} onPress={() => console.log('works')} leftIcon={{ name: 'phone'}} bottomDivider />
                  <Text style={{paddingLeft: 20, paddingTop: 20, fontWeight:'bold', fontSize: 22}}>Omschrijving</Text>
                  <Text style={{padding: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor odio, fringilla et elementum ut, placerat et est. Aenean sagittis tristique scelerisque. Mauris viverra eget tellus id gravida. Vivamus consequat libero ut sapien tincidunt vestibulum. Fusce sed mi eget leo facilisis maximus sit amet id odio. </Text>
            </View>
            

            </View>
        </ScrollView>
          );
        }
      }

  const styles = StyleSheet.create({
    container:{
      backgroundColor:'white'
    },
    intro:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      padding: 25
    },
    introText:{
      marginLeft: 20,
      fontSize: 14,
      fontWeight: "700",
      marginTop: '2%'
    },
  });
  
  export default informationScreen;