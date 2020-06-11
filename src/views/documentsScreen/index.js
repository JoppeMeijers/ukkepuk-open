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
class documentsScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
          backgroundColors:[ '#8C8CF7','#A7D133','#5FD0F4', '#F393BD'],
          iconImages:[require('../../assets/images/documents/bear.png'),require('../../assets/images/documents/giraffe.png'),require('../../assets/images/documents/pinquin.png'),require('../../assets/images/documents/vos.png')],
          count: 5,
          briefings: [{title:'Titel van ouderbief', date:'00-00-0000'},{title:'Titel van ouderbief', date:'00-00-0000'}]
        }
    }
  render() {
    return (

        <ScrollView style={styles.scorllVert}>
            <View style={styles.container}> 
            <Text style={{fontSize: 22, fontWeight: '800', padding: '5%'}}>Ouderbieven</Text>
            {
            this.state.briefings.map((item, i) => (
              <View style={[styles.intro,{backgroundColor: this.state.backgroundColors[i]}]}>
                  <View>
                    <Text style={{color:'white', fontWeight:'800'}}>{item.title}</Text>
                    <Text style={{color:'white', fontWeight:'300', marginTop: 10}}>{item.date}</Text>
                    <TouchableOpacity style={{backgroundColor:'white', padding: 10, marginTop: '20%',borderRadius:20 }} onPress={()=> this.props.navigation.navigate('detailledDocument')}>
                      <Text style={{textAlign: 'center', fontWeight: '600'}}>Bekijk</Text>
                    </TouchableOpacity>
                  </View>
                  <Image source={this.state.iconImages[i]} style={{width: 65, height:110, resizeMode: "cover", marginLeft: '30%', marginTop:10}}/>
              </View>
            ))}

{/*
              <View style={[styles.intro,{backgroundColor: this.state.backgroundColors[1]}]}>
                  <View>
                    <Text style={{color:'white', fontWeight:'800'}}>Titel van ouderbief</Text>
                    <Text style={{color:'white', fontWeight:'300', marginTop: 10}}>00-00-0000</Text>
                    <TouchableOpacity style={{backgroundColor:'white', padding: 10, marginTop: '20%',borderRadius:20 }} onPress={()=> this.props.navigation.navigate('detailledDocument')}>
                      <Text style={{textAlign: 'center', fontWeight: '600'}}>Bekijk</Text>
                    </TouchableOpacity>
                  </View>
                  <Image source={this.state.iconImages[1]} style={{width: 65, height:100, resizeMode: "cover", marginLeft: '30%', marginTop:10}}/>
              </View>

              <View style={[styles.intro,{backgroundColor: this.state.backgroundColors[2]}]}>
                  <View>
                    <Text style={{color:'white', fontWeight:'800'}}>Titel van ouderbief</Text>
                    <Text style={{color:'white', fontWeight:'300', marginTop: 10}}>00-00-0000</Text>
                    <TouchableOpacity style={{backgroundColor:'white', padding: 10, marginTop: '20%',borderRadius:20 }} onPress={()=> this.props.navigation.navigate('detailledDocument')}>
                      <Text style={{textAlign: 'center', fontWeight: '600'}}>Bekijk</Text>
                    </TouchableOpacity>
                  </View>
                  <Image source={this.state.iconImages[2]} style={{width: 65, height:100, resizeMode: "cover", marginLeft: '30%', marginTop:10}}/>
              </View>

              <View style={[styles.intro,{backgroundColor: this.state.backgroundColors[3]}]}>
                  <View>
                    <Text style={{color:'white', fontWeight:'800'}}>Titel van ouderbief</Text>
                    <Text style={{color:'white', fontWeight:'300', marginTop: 10}}>00-00-0000</Text>
                    <TouchableOpacity style={{backgroundColor:'white', padding: 10, marginTop: '20%',borderRadius:20 }} onPress={()=> this.props.navigation.navigate('detailledDocument')}>
                      <Text style={{textAlign: 'center', fontWeight: '600'}}>Bekijk</Text>
                    </TouchableOpacity>
                  </View>
                  <Image source={this.state.iconImages[3]} style={{width: 65, height:100, resizeMode: "cover", marginLeft: '30%', marginTop:10}}/>
              </View>

*/}

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
  
  export default documentsScreen;