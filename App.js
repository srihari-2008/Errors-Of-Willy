import React, { Component } from 'react';
import { Text, View, StyleSheet, Button,Image } from 'react-native';
import BookTransactionScreen from "./screens/BookTransactionScreen"
import SearchScreen from "./screens/SearchScreen"
import {createAppContainer } from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  transaction:{screen:BookTransactionScreen},
  search:{screen:SearchScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName
      if(routeName=="transaction"){
return(
  <Image
  source={require("./assets/book.png")}
  style={{width:40,height:40}}
  />
)
      }

      else if(routeName==="search"){
        return(
          <Image
          source={require("./assets/searchingbook.png")}
          style={{width:40,height:40}}
          />
        )
      }
    }
  })

}
)
const Appcontainer=createAppContainer(TabNavigator)