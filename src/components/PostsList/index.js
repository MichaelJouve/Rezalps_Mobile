import React, {Component} from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Text,
} from "react-native";
import { Icon } from 'react-native-elements'


export default class PostsList extends Component {
    render() {
        return (
            <View style={{flex: 1}}>

                <ScrollView style={{flexDirection: 'column'}}>

                    <TouchableOpacity style={styles.container}
                                      onPress={() => {
                                          this.props.navigation.navigate('Details');
                                      }}>

                        <TouchableOpacity style={{flexDirection: 'row', padding: 5}}>
                            <Image
                                // Avatar de l'utilisateur lié au post'
                                source={require('../../assets/img/default.png')}
                                style={{ width: 30, height: 30, padding: 5}}
                            />

                            <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                {/*Nom de l'utilisateur*/}
                                Nom Prénom
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.post_box}>
                                {/*Contenu du post*/}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}
                                      onPress={() => {
                                          this.props.navigation.navigate('Details');
                                      }}>

                        <TouchableOpacity style={{flexDirection: 'row', padding: 5}}>
                            <Image
                                // Avatar de l'utilisateur lié au post'
                                source={require('../../assets/img/default.png')}
                                style={{ width: 30, height: 30, padding: 5}}
                            />

                            <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                {/*Nom de l'utilisateur*/}
                                Nom Prénom
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.post_box}>
                                {/*Contenu du post*/}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                            </Text>
                        </View>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.container}
                                      onPress={() => {
                                          this.props.navigation.navigate('Details');
                                      }}>

                        <TouchableOpacity style={{flexDirection: 'row', padding: 5}}>
                            <Image
                                // Avatar de l'utilisateur lié au post'
                                source={require('../../assets/img/default.png')}
                                style={{ width: 30, height: 30, padding: 5}}
                            />

                            <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                {/*Nom de l'utilisateur*/}
                                Nom Prénom
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.post_box}>
                                {/*Contenu du post*/}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}
                                      onPress={() => {
                                          this.props.navigation.navigate('Details');
                                      }}>

                        <TouchableOpacity style={{flexDirection: 'row', padding: 5}}>
                            <Image
                                // Avatar de l'utilisateur lié au post'
                                source={require('../../assets/img/default.png')}
                                style={{ width: 30, height: 30, padding: 5}}
                            />

                            <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                {/*Nom de l'utilisateur*/}
                                Nom Prénom
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.post_box}>
                                {/*Contenu du post*/}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}
                                      onPress={() => {
                                          this.props.navigation.navigate('Details');
                                      }}>

                        <TouchableOpacity style={{flexDirection: 'row', padding: 5}}>
                            <Image
                                // Avatar de l'utilisateur lié au post'
                                source={require('../../assets/img/default.png')}
                                style={{ width: 30, height: 30, padding: 5}}
                            />

                            <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                {/*Nom de l'utilisateur*/}
                                Nom Prénom
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.post_box}>
                                {/*Contenu du post*/}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}
                                      onPress={() => {
                                          this.props.navigation.navigate('Details');
                                      }}>

                        <TouchableOpacity style={{flexDirection: 'row', padding: 5}}>
                            <Image
                                // Avatar de l'utilisateur lié au post'
                                source={require('../../assets/img/default.png')}
                                style={{ width: 30, height: 30, padding: 5}}
                            />

                            <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                {/*Nom de l'utilisateur*/}
                                Nom Prénom
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.post_box}>
                                {/*Contenu du post*/}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container}
                                      onPress={() => {
                                          this.props.navigation.navigate('Details');
                                      }}>

                        <TouchableOpacity style={{flexDirection: 'row', padding: 5}}>
                            <Image
                                // Avatar de l'utilisateur lié au post'
                                source={require('../../assets/img/default.png')}
                                style={{ width: 30, height: 30, padding: 5}}
                            />

                            <Text style={{flex: 3, fontSize: 12, padding: 5}}>
                                {/*Nom de l'utilisateur*/}
                                Nom Prénom
                            </Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.post_box}>
                                {/*Contenu du post*/}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae commodi deleniti dolores doloribus, earum excepturi fugiat iure libero molestiae nesciunt nihil nisi nobis, pariatur quam saepe voluptatem! Accusantium, itaque.
                            </Text>
                        </View>

                    </TouchableOpacity>

                </ScrollView>

                <TouchableOpacity
                    style={styles.pencil}
                    onPress={() => {
                        this.props.navigation.navigate('Details');
                    }}
                >
                    <Icon
                        name={'edit'}
                        size={50}
                        color={'#fff'}
                    />
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
    },
    post_box: {
        fontSize: 15,
        textAlign: 'justify',
        margin: 10,
    },
    pencil: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: 'rgba(108, 117, 125, 0.8)',
        borderRadius: 100,
        padding: 8,
    }
});