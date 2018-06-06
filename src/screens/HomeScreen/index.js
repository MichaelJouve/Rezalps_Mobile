
import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Test from "../../screens/Test";
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    View,
    Button,

} from 'react-native';

import {InputLogin} from "../../components/Login";

export default class HomeScreen extends Component {
    render() {
        return (

            <View style={{flex:1}}>

                <KeyboardAwareScrollView //To keep the input on top of the keyboard, not hidden.
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}
                >

                    <View style={{flex: 2, flexDirection: 'row', justifyContent:'space-around', marginTop: 5, marginBottom: 5,}}>
                        <Image source={require('../../assets/img/social_work.png')} style={styles.imgIntro} />
                        <Image source={require('../../assets/img/link.png')} style={styles.imgIntro} />
                        <Image source={require('../../assets/img/recrutement.png')} style={styles.imgIntro} />
                    </View>

                    <View style={{flex: 3, flexDirection: 'row', justifyContent:'space-around', marginTop: 15, marginBottom: 5,}}>
                        <Text>Apprendre</Text>
                        <Text>Rencontrer</Text>
                        <Text>Recruter</Text>
                    </View>
                    <View>
                        <Text style={styles.hometitle}>Dernières publications</Text>
                    </View>
                        <ScrollView style={{maxHeight: 200,}}>
                            <View style={{flex: 1,
                                flexDirection: 'column',
                                borderWidth: 1,
                                borderRadius: 5,
                                margin: 5,}}>

                                <View style={{flexDirection: 'row', padding: 5}}>
                                    <Image
                                        // Avatar de l'utilisateur lié au post'
                                        source={require('../../assets/img/default.png')}
                                        style={{ width: 30, height: 30, padding: 5}}
                                    />

                                    <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                        {/*Nom de l'utilisateur*/}
                                        Nom Prénom
                                    </Text>
                                </View>

                                <View>
                                    <Text style={{fontSize: 15,
                                        textAlign: 'justify',
                                        margin: 10,}}>
                                        {/*Contenu du post*/}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex: 1,
                                flexDirection: 'column',
                                borderWidth: 1,
                                borderRadius: 5,
                                margin: 5,}}>

                                <View style={{flexDirection: 'row', padding: 5}}>
                                    <Image
                                        // Avatar de l'utilisateur lié au post'
                                        source={require('../../assets/img/default.png')}
                                        style={{ width: 30, height: 30, padding: 5}}
                                    />

                                    <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                        {/*Nom de l'utilisateur*/}
                                        Nom Prénom
                                    </Text>
                                </View>

                                <View>
                                    <Text style={{fontSize: 15,
                                        textAlign: 'justify',
                                        margin: 10,}}>
                                        {/*Contenu du post*/}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                                    </Text>
                                </View>

                            </View>

                            <View style={{flex: 1,
                                flexDirection: 'column',
                                borderWidth: 1,
                                borderRadius: 5,
                                margin: 5,}}>

                                <View style={{flexDirection: 'row', padding: 5}}>
                                    <Image
                                        // Avatar de l'utilisateur lié au post'
                                        source={require('../../assets/img/default.png')}
                                        style={{ width: 30, height: 30, padding: 5}}
                                    />

                                    <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                        {/*Nom de l'utilisateur*/}
                                        Nom Prénom
                                    </Text>
                                </View>

                                <View>
                                    <Text style={{fontSize: 15,
                                        textAlign: 'justify',
                                        margin: 10,}}>
                                        {/*Contenu du post*/}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                                    </Text>
                                </View>

                            </View>

                            <View style={{flex: 1,
                                flexDirection: 'column',
                                borderWidth: 1,
                                borderRadius: 5,
                                margin: 5,}}>

                                <View style={{flexDirection: 'row', padding: 5}}>
                                    <Image
                                        // Avatar de l'utilisateur lié au post'
                                        source={require('../../assets/img/default.png')}
                                        style={{ width: 30, height: 30, padding: 5}}
                                    />

                                    <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                        {/*Nom de l'utilisateur*/}
                                        Nom Prénom
                                    </Text>
                                </View>

                                <View>
                                    <Text style={{fontSize: 15,
                                        textAlign: 'justify',
                                        margin: 10,}}>
                                        {/*Contenu du post*/}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                                    </Text>
                                </View>

                            </View>

                            <View style={{flex: 1,
                                flexDirection: 'column',
                                borderWidth: 1,
                                borderRadius: 5,
                                margin: 5,}}>

                                <View style={{flexDirection: 'row', padding: 5}}>
                                    <Image
                                        // Avatar de l'utilisateur lié au post'
                                        source={require('../../assets/img/default.png')}
                                        style={{ width: 30, height: 30, padding: 5}}
                                    />

                                    <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                        {/*Nom de l'utilisateur*/}
                                        Nom Prénom
                                    </Text>
                                </View>

                                <View>
                                    <Text style={{fontSize: 15,
                                        textAlign: 'justify',
                                        margin: 10,}}>
                                        {/*Contenu du post*/}
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                                    </Text>
                                </View>

                            </View>
                        </ScrollView>
                    <View>
                        <Text style={styles.hometitle}>Nous rejoindre</Text>
                    </View>
                    <InputLogin style={styles.loginArea}/>

                    <View style={{flex: 5, flexDirection: 'column', justifyContent:'space-around', marginTop: 5, marginBottom: 5, marginLeft: 25,
                        marginRight: 25,}}>

                        <View style={{ marginBottom:10 }}>
                            <Button
                                style={{  }}
                                onPress={() => {
                                   this.props.navigation.navigate('Posts');
                                }}
                                title="Inscription"
                                color="#ea4c89"
                                borderColor= "#ea4c89"
                                borderRadius= "2"
                                // accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                        <Button
                            style= {styles.button}
                            onPress={() => {
                                this.props.navigation.navigate('Posts');
                            }}
                            title="Login"
                            color="#ea4c89"
                            // accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#f9f9f9',
    },
    imgIntro: {
        height: 50,
        width: 50,
    },
    postsIndex: {
        backgroundColor: 'lightgrey',
        marginBottom: 15,
        height: 100,
    },
    loginArea: {
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,

    },
    hometitle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 5,
    },
});
