import {StackNavigator} from 'react-navigation';
import publish from '/home/damien/sites/app_rezalps';
import { Button } from 'react-native';
import drawer from '/home/damien/sites/app_rezalps';
import header from '/home/damien/sites/app_rezalps';
import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class Publish extends React.Component {

    render() {

        return (
            <View style={{flexDirection: 'column'}}>

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

                <View style={styles.post}>
                    <View>
                        <TextInput
                            editable={true}
                            maxLength={250}
                            multilible={true}
                            numberOfLines={4}
                            underLineColorAndroid='transparent'
                            placeholder='Exprimez vous ici...'
                        />
                    </View>

                    <View >
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={() => {}}
                        >
                            <Text style={{textAlign: 'center', color: '#f6e8dd',}}> Valider </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    post: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
        padding: 5,
        height: '50%'
    },
    touchable: {
        marginLeft: '80%',
        width: 60,
        height: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#007bff',
        backgroundColor: '#ea4c89',
    },

});
