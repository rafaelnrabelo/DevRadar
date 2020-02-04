import React from 'react';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

class AddButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{marginRight: 20}} onPress={() => {this.props.navigation.navigate('Registration')}}>
                        <MaterialIcons name="add-circle" size={25} color="#FFF" />
            </TouchableOpacity>
        );
    }
}
export default withNavigation(AddButton);