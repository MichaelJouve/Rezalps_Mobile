/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import styles from './style';
import {
    Platform,
    Text,
    Image,
    TouchableOpacity,
    AppRegistry,
    TextInput,
    Button,
    View,
} from 'react-native';

export default class DetailsPost extends Component {
    render() {
        return (
            <View style={styles.showpost}>

                <View style={styles.post}>
                    <View style={styles.auteurpost}>
                        <Image source={require('../../assets/img/nico.jpeg')} style={styles.avatar} />
                        <View>
                            <Text style={styles.pseudo}>Nicolas</Text>
                            <Text style={styles.postdate}>envoyé à 10h41</Text>
                        </View>
                    </View>
                    <View style={styles.postcontent}>
                        <Text>Ici sera écrit le post qu'aura choisi l'utilisateur après avoir cliqué sur l'une des publications de son flux.</Text>
                        <View style={styles.postinteraction}>
                            <Text style={{fontSize: 10}}>Aucun commentaire</Text>
                            <Image source={require('../../assets/img/like-off.png')} style={styles.like} />
                            <Image source={require('../../assets/img/dislike-off.png')} style={styles.dislike} />
                        </View>
                    </View>
                </View>
                <View style={styles.sendcomment}>
                    <TextInput onChangeText={(text) => this.setState({text})}
                               underlineColorAndroid='transparent'
                               placeholder="Envoyer un commentaire"
                               style={styles.commentinput}/>
                    <View style={styles.sendbutton}>
                        <Button title="Envoyer" color="#ea4c89" accessibilityLabel="Appuie moi !" />
                    </View>
                </View>
            </View>
        );
    }
}
