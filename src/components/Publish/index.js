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
                            editable={true}
                            maxLength={250}
                            multilible={true}
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
        borderWidth: 0.5,
        borderRadius: 2,
        backgroundColor: '#ea4c89',
    },

});
