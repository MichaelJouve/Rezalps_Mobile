import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
} from 'react-native';


export default class drawer extends Component {

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Menu</Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={50}
                drawerPosition={DrawerLayoutAndroid.positions.right}
                renderNavigationView={() => navigationView}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{margin: 10, fonSize: 15, textAlign: 'right'}}>Settings</Text>
                    <Text style={{margin: 10, fonSize: 15, textAlign: 'right'}}>Logout</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

AppRegistry.registerComponent('Rezalps_Mobile', () => drawer);