/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';

import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import homeScreen from './src/views/homeScreen';
import landingScreen from './src/views/landingScreen';
import loginScreen from './src/views/loginScreen';
import requestPasswordScreen from './src/views/reqeustPasswordScreen';
import signUpScreen from './src/views/signUpScreen';
import documentsScreen from './src/views/documentsScreen';
import informationScreen from './src/views/informationScreen';
import settingsScreen from './src/views/settingsScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import detailedDocuScreen from './src/views/detailedDocuScreen';

const homeStack = createStackNavigator({
    Home: {
        screen: homeScreen,
        navigationOptions:({navigation})=>({
            tabBarLabel:"Dashboard",
      title: "Dashboard",
      headerTintColor: '#fff',
      headerStyle: {
         backgroundColor: '#FF8484'
      }
        }),
    
      }
  }
  ,{
      initialRouteName: 'Home'
    });

    const documentsStack = createStackNavigator({
        Document: {
            screen: documentsScreen,
            navigationOptions:({navigation})=>({
                tabBarLabel:"Dashboard",
              title: "Documenten",
              headerTintColor: '#fff',
              headerStyle: {
                 backgroundColor: '#5FD0F4'
              }
            }),
        
          },
        detailledDocument: {
              screen: detailedDocuScreen,
              navigationOptions:({navigation})=>({
                  tabBarLabel:"Dashboard",
                title: "Documenten",
                headerTintColor: '#fff',
                headerStyle: {
                   backgroundColor: '#5FD0F4'
                }
              }),
          
            },
      }
      ,{
          initialRouteName: 'Document'
        });

        const informationStack = createStackNavigator({
            Home: {
                screen: informationScreen,
                navigationOptions:({navigation})=>({
                    tabBarLabel:"Dashboard",
              title: "Informatie",
              headerTintColor: '#fff',
              headerStyle: {
                 backgroundColor: '#8C8CF7'
              }
                }),
            
              }
          }
          ,{
              initialRouteName: 'Home'
            });

            const settingsStack = createStackNavigator({
                Home: {
                    screen: settingsScreen,
                    navigationOptions:({navigation})=>({
                        tabBarLabel:"Dashboard",

                  title: "Instellingen",
                  headerTintColor:'#fff',
                  headerStyle:{
                    backgroundColor: '#424874'
                  }
                    }),
                
                  }
              }
              ,{
                  initialRouteName: 'Home'
                });
    

const AppNavigator = createBottomTabNavigator({
    Home: {
      screen: homeStack,
      navigationOptions:({navigation})=>({
          tabBarLabel:"Dashboard",
    tabBarIcon: ({ tintColor }) => (
      < Icon  name="home" size={24} color="#000"/>
      ),
      }),
  
    },
  Documents: {
        screen: documentsStack,
        navigationOptions:({navigation})=>({
            tabBarLabel:"Documenten",
      tabBarIcon: ({ tintColor }) => (
        < Icon  name="file" size={18} color="#000"/>
        ),
        }),
      },
    Information: {
          screen: informationStack,
          navigationOptions:({navigation})=>({
              tabBarLabel:"Informatie",
        tabBarIcon: ({ tintColor }) => (
          < Icon  name="info" size={22} color="#000"/>
          ),
          }),
        },
      Settings: {
            screen: settingsStack,
            navigationOptions:({navigation})=>({
                tabBarLabel:"Instellingen",
          tabBarIcon: ({ tintColor }) => (
            < Icon  name="cog" size={22} color="#000"/>
            ),
            }),
        
          },


}
  ,{
      initialRouteName: 'Home'
    });
  


const LoginSwitch = createSwitchNavigator(
  {
    Landing: {
      screen: landingScreen
    },
    Signup: {
        screen: signUpScreen
    },
    Login: {
        screen: loginScreen
    },
    forgetPassword:{
      screen: requestPasswordScreen,
    },
    Home: {
      screen: AppNavigator,
    }
},
{
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Landing'
}
)

export default createAppContainer(LoginSwitch);
