import React from 'react';
import { Button } from 'react-native';
import drawer from './drawer';
import {
    View,
    Image,
} from 'react-native';

const header_user = () => (

        <View style={{padding: 10, flexDirection: 'row', backgroundColor: '#444444'}} >
            <Image source={require('../../src/assets/img/rezalps_img.png')} style={{width: 150, height: 40}} />
            <Image source={require('../../src/assets/img/default.png')} style={{marginLeft:'40%', width: 40, height: 40}} />
            <Button
                style={{width: 50, height: 40, backgroundColor: '#007bff'}}
                logo={require('../../src/assets/img/burger_menu.png')}
                title="Menu"
                onPress={() => this.props.navigation('drawer')}
            />
        </View>
);

export default header_user;