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

    constructor () {
        super();
        this.state={
            post: '',
        }
    }

    updateValue(text, field) {
        if(field === 'post') {
            this.setState({
                post:text,
            })
        }
    }

    submit() {
        let publish={}
        publish.post=this.state.post;

        var url = 'https://example.com/profile';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(publish),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

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
                            onChangeText={(text)=>this.updateValue(text, 'post')}
                        />
                    </View>

                    <View >
                        <TouchableOpacity
                            style={styles.touchable}
                            onPress={() => this.submit()}
                        >
                            <Text style={styles.valider}> Valider </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}


