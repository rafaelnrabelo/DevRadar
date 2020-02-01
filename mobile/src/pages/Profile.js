import React from 'react';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
    const githubUsername = navigation.getParam('github_username'); 

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor='#23282E' />
            <WebView source={{ uri: `https://github.com/${githubUsername}` }} style={{ flex: 1 }} />
        </>
    )
}

export default Profile;