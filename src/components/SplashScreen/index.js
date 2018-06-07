/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import styles from './style';
import {
    Image,
    View,
} from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.loaderBG}>
                <Image source={require('../../assets/img/logo-texte-cote-web.png')} style={styles.logo} />
            </View>
        );
    }
}

