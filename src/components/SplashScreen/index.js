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
    ActivityIndicator,

} from 'react-native';

export default class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true, dataSource: null }
    }
    async componentDidMount() {
        try {
            let response = await fetch('https://rezalps.fr/api/posts');
            this.setState({
                isLoading: false,
                dataSource: await response.json(),
            });
        }

        catch (error){
            console.error(error);
        }
        setTimeout(()=>{this.navigation.navigate('Home')}, 3000 );
    };

    render() {
        return (
            <View style={styles.loaderBG}>
                <Image source={require('../../assets/img/logo-texte-cote-web.png')} style={styles.logo} />
            </View>
        );
    }
}
