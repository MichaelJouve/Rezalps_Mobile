
import React from "react";
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
/**
 *
 * @returns {*}
 * @constructor
 */
const Header = () =>(

    <View style={styles.container}>
        <Image source={require('../assets/img/logo-texte-cote-web.png')} style={styles.logo} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
    },

    logo: {
        height: 50,
        width: 150,
        marginLeft: 12,
        marginTop: 5,
    },
});

export default Header;
