
import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    Text,
    Image,
    ScrollView,
    View,
    Button,
    FlatList,
    StyleSheet,
    TextInput,
    Alert,

} from 'react-native';

import TokenStorage from "../../components/SaveToken";

export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true, dataSource: null, email: '', password: '', }
    }

    async componentDidMount() {
        try {
            let response = await fetch('https://rezalps.fr/api/posts');
            this.setState({
                isLoading: false,
                dataSource: await response.json(),
            });
        }

        catch (error){
            console.error(error);
        }
    };

    async UserLoginFunction() {
        let token = null;
        try {
            let response = await fetch('https://rezalps.fr/oauth/token/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'grant_type': 'password',
                    'client_id': 3,
                    'client_secret': 'GUVNcpr4q9YSaFnz6OWgVl9y8LYqAa9GnEvgZe2s',
                    'username': this.state.email,
                    'password': this.state.password,
                    'scope': ''
                }),
            });
            if (response.status !== 200) {
                Alert.alert(
                    'Oups !',
                    'Veuillez vérifier vos identifiants',
                    console.log(response.json()),
                );
            }
            else {
                token = await response.json();
                access = await token.access_token;
                TokenStorage.token = access;
                this.props.navigation.navigate('Posts');
            }

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <View style={{flex:1}}>

                <KeyboardAwareScrollView //To keep the input on top of the keyboard, not hidden.
                    resetScrollToCoords={{x: 0, y: 0}}
                    contentContainerStyle={styles.container}
                    scrollEnabled={true}
                >
                    <ScrollView style={{height: '100%',}}>

                        <View style={{
                            flex: 2,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 5,
                            marginBottom: 5,
                        }}>
                            <Image source={require('../../assets/img/social_work.png')} style={styles.imgIntro}/>
                            <Image source={require('../../assets/img/link.png')} style={styles.imgIntro}/>
                            <Image source={require('../../assets/img/recrutement.png')} style={styles.imgIntro}/>
                        </View>

                        <View style={{
                            flex: 3,
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 15,
                            marginBottom: 5,
                        }}>
                            <Text>Apprendre</Text>
                            <Text>Rencontrer</Text>
                            <Text>Recruter</Text>
                        </View>
                        <View>
                            <Text style={styles.hometitle}>Dernières publications</Text>

                        </View>

                        <View>
                            <FlatList
                                data={this.state.dataSource}
                                renderItem={({item}) =>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        margin: 5,
                                    }}>

                                        <Text style={{flexDirection: 'row', padding: 5}}>
                                            <Image
                                                // Avatar de l'utilisateur lié au post'
                                                source={require('../../assets/img/default.png')}
                                                style={{ width: 30, height: 30, padding: 5}}
                                            />

                                            <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                                {/*Nom de l'utilisateur*/}
                                                {item.name}   /*name is on hidden in the APP so it's not comming in the app data... */
                                            </Text>
                                        </Text>


                                        <Text style={{
                                            fontSize: 15,
                                            textAlign: 'justify',
                                            margin: 10,
                                        }}>
                                            {/*Contenu du post*/}
                                            {item.publication}
                                        </Text>
                                    </View>
                                }
                                keyExtractor={(item, index) => index}
                            />
                        </View>

                        <View>
                            <Text style={styles.hometitle}>Nous rejoindre</Text>
                        </View>


                        <View style={{
                            flex: 5,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: 25,
                            marginRight: 25,
                        }}>

                            <View>
                                <View style= {styles.loginArea}>
                                    <TextInput
                                        style={{height: 40, borderColor: '#ea4c89', borderWidth: 1, marginBottom: 7, borderRadius: 2}}
                                        onChangeText={(email) => this.setState({email})}
                                        underlineColorAndroid='transparent'
                                        placeholder="E-mail"
                                    />
                                    <TextInput
                                        style={{height: 40, borderColor: '#ea4c89', borderWidth: 1, borderRadius: 2}}
                                        onChangeText={(password) => this.setState({password})}
                                        underlineColorAndroid='transparent'
                                        placeholder="Mot de passe"
                                    />
                                </View>


                                <View style={{
                                    flex: 5,
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    marginTop: 5,
                                    marginBottom: 5,
                                    marginLeft: 25,
                                    marginRight: 25,
                                }}>

                                    <View style={{marginBottom: 10}}>
                                        <Button
                                            onPress={() => {
                                                this.props.navigation.navigate('Posts');
                                            }}
                                            title="Inscription"
                                            color="#ea4c89"
                                            borderColor="#ea4c89"
                                            borderRadius="2"
                                            // accessibilityLabel="Learn more about this purple button"
                                        />
                                    </View>

                                    <View  style={{marginBottom: 10}}>
                                        <Button
                                            style={styles.button}
                                            onPress={this.UserLoginFunction.bind(this)}
                                            title="Login"
                                            color="#ea4c89"
                                            // accessibilityLabel="Learn more about this purple button"
                                        />
                                    </View>
                                </View>
                            </View>

                            <Button
                                style={styles.button}
                                onPress={() => {
                                    this.props.navigation.navigate('geoloc');
                                }}
                                title="Login"
                                color="#ea4c89"
                                // accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                    </ScrollView>
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
