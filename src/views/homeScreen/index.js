import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image,Dimensions, ProgressBarAndroid,TouchableOpacity, Modal,} from 'react-native';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Video from 'react-native-video';
import WebView from 'react-native-webview';
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
class homeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
          messages:[
            {name:'Juf Angelien & Gaby', function:'Leidsters Ukkepuk', profileImage:'EBL', image:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor odio, fringilla et elementum ut, placerat et est. Aenean sagittis tristique scelerisque. Mauris viverra eget tellus id gravida. Vivamus consequat libero ut sapien tincidunt vestibulum. Fusce sed mi eget leo facilisis maximus sit amet id odio.'},
            {name:'Juf Angelien & Gaby', function:'Leidsters Ukkepuk', profileImage:'EBL', image:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg", text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor odio, fringilla et elementum ut, placerat et est. Aenean sagittis tristique scelerisque. Mauris viverra eget tellus id gravida. Vivamus consequat libero ut sapien tincidunt vestibulum. Fusce sed mi eget leo facilisis maximus sit amet id odio.'},
          ]

        }
    }
  render() {
    return (

        <ScrollView style={styles.scorllVert}>
            <View style={styles.container}> 
            {
            this.state.messages.map((item, i) => (
            <View>
              <View style={styles.intro}>
                  <Avatar size="medium" rounded title={item.profileImage} onPress={() => console.log("Works!")} activeOpacity={0.7} />
                  <Text style={styles.introText}>{item.name}{"\n"}<Text style={{fontWeight: '200'}}>{item.function}</Text></Text>
              </View>
                  <Image source={{uri:item.image}} style={{width: SCREEN_WIDTH, height:450}}/>
                  <Text style={{padding: 20}}>{item.text} </Text>
            </View>))
            }
     <View style={{flex:1, height: 200}}>
          {/*} <Video 
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ukkepuk-7d9dc.appspot.com/o/movie.mp4?alt=media&token=13ab1963-be1e-4974-9c5f-111d2d8256c5' }}
        style={styles.backgroundVideo}
        rate={1} volume={1} muted={true}
        repeat={true}
        resizeMode='cover' key="video1" 
          />*/}
<WebView

        source={{uri: 'https://www.youtube.com/embed/HW7ZYzAXHBg?rel=1&autoplay=1&showinfo=0&controls=0&fullscreen=1'}}
/>
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
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },

  });
  
  export default homeScreen;