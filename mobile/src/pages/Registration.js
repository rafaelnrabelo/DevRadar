import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';

function Registration({ navigation }) {
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadPosition() {
            const { granted } = await requestPermissionsAsync();
    
            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });
    
                const { latitude, longitude } = coords;
    
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02
                })
            }
        }  
        loadPosition();
    }, [])

    async function handleAddDev() {
        const {latitude, longitude} = currentRegion;
        
        const data = {
            github_username: github_username,
            techs: techs,
            latitude: latitude,
            longitude: longitude
        }

        if((github_username != '') && (techs != '')) {
            const response = await api.post('/devs', data);
            setGithubUsername('');
            setTechs('');
            navigation.navigate('Main');
        }
    }

    function handleMarkerChanged(region) {

        const { latitude, longitude } = region.nativeEvent.coordinate;
        setCurrentRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        });
    }

    if(!currentRegion) {
        return null;
    }

    return (
        <View style={{backgroundColor:'#7D40E7', flex: 1}} >
            <StatusBar barStyle="light-content" backgroundColor='#7D40E7' />
            <View style={styles.registerForm}>
                <Text style={styles.formText} >Usuário do Github</Text>
                <TextInput
                    style={styles.registerInput}
                    placeholder="Seu Usuário do Github"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={github_username}
                    onChangeText={setGithubUsername}
                />
                <Text style={styles.formText} >Tecnologias</Text>
                <TextInput
                    style={styles.registerInput}
                    placeholder="Suas tecnologias"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />
            </View>
            <Text style={styles.mapInfo}>Segure o marcador para reposicionar</Text>
            <View style={styles.mapBox}>
                <MapView
                    initialRegion={currentRegion}
                    style={styles.map}
                    mapPadding={{ left: 0, right: 0, top: 0, bottom: 30 }}
                    showsCompass={false}
                >
                    <Marker coordinate={currentRegion} onDragEnd={handleMarkerChanged} draggable>
                        <MaterialIcons name="add-location" size={45} color="#7D40E7" />
                    </Marker>
                </MapView>
            </View>
            <TouchableOpacity onPress={handleAddDev} style={styles.saveButton}>
                <Text style={styles.buttonText} >Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    registerForm: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },
    formText: {
        marginTop: 30,
        paddingBottom: 10,
        color: '#FFF',
        fontSize: 18,
        fontWeight: "bold"
    },
    registerInput: {
        height: 50,
        width: 350,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 30,
        paddingHorizontal: 20,
        fontSize: 16,
        elevation: 0
    },
    mapBox: {
        width: 350,
        height: 300,
        alignSelf: "center",
        overflow: "hidden", 
        borderRadius: 15
    },
    mapInfo: {
        color: '#FFF',
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 10
    },
    map: {
        flex: 1
    },
    saveButton: {
        width: 200,
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 25,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 50,
        elevation: 5
    },
    buttonText: {
        color: '#7D40E7',
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    }
})

export default Registration;