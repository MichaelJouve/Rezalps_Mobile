/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    AppRegistry,
    TextInput,
    Button,
    View
} from 'react-native';

export default class DetailsPost extends Component {
    render() {
        return (
            <View style={styles.showpost}>

                <View style={styles.post}>
                    <View style={styles.auteurpost}>
                        <Image source={require('../../assets/img/nico.jpeg')} style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10,}} />
                        <View>
                            <Text style={{fontWeight: 'bold'}}>Nicolas</Text>
                            <Text style={{fontSize: 10, fontStyle: 'italic'}}>envoyé à 10h41</Text>
                        </View>
                    </View>
                    <View style={styles.postcontent}>
                        <Text>Ici sera écrit le post qu'aura choisi l'utilisateur après avoir cliqué sur l'une des publications de son flux.</Text>
                        <View style={styles.postinteraction}>
                            <Text style={{fontSize: 10}}>Aucun commentaire</Text>
                            <Image source={require('../../assets/img/like-off.png')} style={{ width: 33, height: 25, marginLeft: 10,}} />
                            <Image source={require('../../assets/img/dislike-off.png')} style={{ width: 33, height: 25}} />
                        </View>
                    </View>
                </View>
                <View style={styles.sendcomment}>
                    <TextInput onChangeText={(text) => this.setState({text})}
                               underlineColorAndroid='transparent'
                               placeholder="Envoyer un commentaire"
                               style={{borderWidth:0.5, borderRadius:5, marginTop:10, marginLeft:10, padding:10, height:'32%', flex:4}}/>
                    <View style={styles.sendbutton}>
                        <Button title="Envoyer" color="#ea4c89" accessibilityLabel="Appuie moi !" />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    showpost: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#444444',
    },
    usermenu: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    pseudo: {
        fontSize: 15,
        margin: 10,
        color: 'white',
    },
    auteurpost: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 0.5,
    },
    post: {
        color: '#333333',
        marginBottom: 5,
        margin: 10,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 10,
        paddingRight: 10,
        borderWidth: 0.5,
        borderRadius: 5,
    },
    postcontent: {
        marginTop: 5,
    },
    postinteraction: {
        padding: 10,
        marginLeft: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    sendcomment: {
        flexDirection: 'row',
    },
    sendbutton: {
        flex: 2,
        marginTop: 10,
        width: '100%',
        height: '32%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});