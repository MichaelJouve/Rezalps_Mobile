import React from 'react';
import styles from './style';
import {
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
                            maxLength={250}
                            multiligle={true}
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
                            <Text style={styles.valider}> Valider </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


