import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { Image, Text } from 'react-native';

import Main from './pages/Main';
import Profile from './pages/Profile';
import { View } from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
          <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../assets/logo.png')}
                    style={{ width: 35, height: 35}}
                />
                <Text style={{ fontWeight: 'bold', color: '#FFF', fontSize: 25, paddingLeft: 5 }}>DevRadar</Text>
          </View>
      );
  }
}

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                headerTitle: () => <LogoTitle />,
                headerStyle: {
                    backgroundColor: '#7D40E7'
                }
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github',
                headerStyle: {
                    backgroundColor: '#23282E'
                }
            },
        }
    }, {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    })
);

export default Routes;