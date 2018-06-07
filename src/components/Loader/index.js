/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native';

export default class Loader extends Component {
    render() {
        return (
            <View style={styles.loaderBG}>
                <Image source={require('../../assets/img/logo-texte-cote-web.png')} style={styles.logo} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loaderBG: {
        flex: 1,
        backgroundColor: '#444444',
        alignItems: 'center',
    },
    logo: {
        height: 80,
        width: 240,
        marginTop: '50%',
    },
});
