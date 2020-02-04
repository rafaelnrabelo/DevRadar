import { createAppContainer, withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Main from './pages/Main';
import AddButton from './pages/utils/AddButton';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
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
                },
                headerRight: () => (
                    <AddButton />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github',
                headerStyle: {
                    backgroundColor: '#23282E',
                    elevation: 0
                }
            }
        },
        Registration: {
            screen: Registration,
            navigationOptions: {
                title: 'Cadastro',
                headerStyle: {
                    backgroundColor: '#7D40E7',
                    elevation: 0
                }
            }
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