/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    ActivityIndicator,

} from 'react-native';

export default class Loader extends React.Component {
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
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }


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
