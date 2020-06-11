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
class detailedDocuScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
          headercolor:'#8C8CF7',
          title:'Titel van document',
          date:'00-00-0000',
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nisl nec lectus pulvinar mattis a ac magna. Quisque faucibus, orci sed convallis placerat, lacus justo tincidunt turpis, ut lacinia dui nisi nec leo. Donec sed odio id urna efficitur tincidunt vel ut nisi. Curabitur nec ultrices nulla. Vivamus erat justo, vehicula ac urna id, sodales pretium arcu. Cras pharetra placerat dignissim. Sed facilisis ex eget fringilla semper. Nullam placerat bibendum nunc sed suscipit. Mauris pulvinar convallis laoreet. Aenean at dignissim sapien. Proin non pellentesque magna. Suspendisse vitae nunc at urna iaculis convallis eget gravida urna. Maecenas mauris magna, imperdiet ut dolor nec, bibendum pharetra quam. Sed vulputate turpis sit amet faucibus ornare. Integer aliquet molestie ligula, nec euismod augue auctor eget. Sed id aliquet nisi, et convallis nibh. Cras lobortis nisi eget neque elementum molestie. Curabitur fringilla risus vestibulum urna vehicula, at iaculis arcu interdum. Morbi sit amet lorem id nisi eleifend sollicitudin. Nullam tempus vitae eros quis auctor. Integer a risus eu est pretium accumsan sed eu sapien. Pellentesque porta sapien odio, eu varius elit cursus vitae. Integer eget faucibus nibh, sed ultrices arcu.'
      
        }
    }
  render() {
    return (

        <ScrollView style={styles.scorllVert}>
            <View style={styles.container}> 
            <View style={styles.header}> 
              <View style={{paddingTop: '20%', width:'50%'}}>
                <Text style={{fontWeight:'bold', color:'white', fontSize:20, paddingBottom: 10}} >{this.state.title}</Text><Text style={{color:'white'}}>{this.state.date}</Text>
              </View>
              <View style={{width:'50%'}}>
                <Image source={require('../../assets/images/documents/giraffe.png')} style={{width:100, height:190, resizeMode: "cover", marginLeft: '30%', marginTop:10}}/>
                </View>
            </View>
            <View style={{padding: '5%'}}>
              <Text>
                {this.state.text}
              </Text>
            </View>

            <View style={[styles.intro,{backgroundColor: '#F393BD'}]}>
                  <View style={{width: '50%', paddingTop:'10%'}}>
                    <Text style={{color:'white', fontWeight:'800'}}>Vragen?</Text>
                    <Text style={{color:'white', marginTop: 10}}>Stel deze aan één van de leidsters.</Text>

                  </View>
                  <View style={{width: '50%'}}>
                  <Image source={require('../../assets/images/documents/vos.png')} style={{width: 75, height:110, resizeMode: "cover", marginLeft: '30%', marginTop:10}}/>
                  </View>
              </View>

            </View>
        </ScrollView>
          );
        }
      }

  const styles = StyleSheet.create({
    container:{
      backgroundColor:'white',
      
    },
    header:{
      padding:'5%',
      backgroundColor: '#8C8CF7',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    },
    intro:{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      padding: 25,
      width: '90%',
      marginLeft:'5%',
      backgroundColor:'#8C8CF7',
      borderRadius: 20,
      color: 'white',
      marginTop: '5%',
      marginBottom: '5%'
    },
    introText:{
      marginLeft: 20,
      fontSize: 14,
      fontWeight: "700",
      marginTop: '2%'
    },
  });
  
  export default detailedDocuScreen;