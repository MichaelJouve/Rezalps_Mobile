import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
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
        fontWeight: 'bold'
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
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    like: {
        width: 33,
        height: 25,
        marginLeft: 10,
    },
    dislike: {
        width: 33,
        height: 25
    },
    commentinput: {
        borderWidth:0.5,
        borderRadius:5,
        marginTop:10,
        marginLeft:10,
        padding:10,
        height:'32%',
        flex:4
    },
    postdate: {
        fontSize: 10,
        fontStyle: 'italic'
    },
});