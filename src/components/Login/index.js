import React, {Component} from "react";
import {View, TextInput, StyleSheet} from "react-native";

export class InputLogin extends Component { /*need to add the API for user email and password. if user not find then create a new one if button
    inscription is push, if not send error user not found */
    render() {
        return (
            <View style= {styles.loginArea}>
                <TextInput
                    style={{height: 40, borderColor: '#ea4c89', borderWidth: 1, marginBottom: 7, borderRadius: 2}}
                    onChangeText={(email) => this.setState({email})}
                    underlineColorAndroid='transparent'
                    placeholder="E-mail"
                />
                <TextInput
                    style={{height: 40, borderColor: '#ea4c89', borderWidth: 1, borderRadius: 2}}
                    onChangeText={(Password) => this.setState({Password})}
                    underlineColorAndroid='transparent'
                    placeholder="Mot de passe"
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginArea: {
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,

    },

});