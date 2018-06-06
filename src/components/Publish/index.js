import { Button } from 'react-native';
import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class Index extends React.Component {

    render() {

        return (
            <View style={{flexDirection: 'column'}}>
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
