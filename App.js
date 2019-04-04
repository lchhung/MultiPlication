
import React, {Component} from 'react';
import {AppRegistry, Text,TouchableOpacity, View, FlatList} from 'react-native';
import {createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LearnScreen} from './LearnScreen';
import {TestScreen} from './TestScreen';
import {AnswerScreen} from './AnswerScreen';
import {IconWithBadge} from './IconWithBadge';




// This is the main program


export default class App extends React.Component {
  render(){
    return<AppContainer/>;
  }
}

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  // return <IconWithBadge {...props} badgeCount={9} />;
  return <IconWithBadge {...props} badgeCount={9} />;
};

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'LEARN') {
    iconName = `ios-book`;
    
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'TEST') {
    iconName = `ios-calculator`;
    // IconComponent = HomeIconWithBadge;
    IconComponent = HomeIconWithBadge;
  }
  else {
    iconName = 'ios-add-circle';
    IconComponent = HomeIconWithBadge;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={30} color={tintColor} />;
};

const RootStack= createBottomTabNavigator(
      {
        LEARN: LearnScreen,
        // TEST: TestTry,
        TEST: TestScreen,
        ANSWER: AnswerScreen,
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ tintColor }) =>
            getTabBarIcon(navigation, tintColor),
        }),
        tabBarOptions: {
          activeTintColor: 'red',
          inactiveTintColor: 'green',
          showIcon: 'true',
          // showLabel: (Platform.OS !== 'android'),// No label for Android
          labelStyle: {
            fontSize: 20,
          },
          style: {
            backgroundColor: 'grey',
          },
          
        },
        
      }
    );
const AppContainer =createAppContainer(RootStack); 
AppRegistry.registerComponent('App', () => App)



