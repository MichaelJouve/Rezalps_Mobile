import { createStackNavigator } from 'react-navigation';
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Header from "./src/components/header";
import PostsList from "./src/components/PostsList";
import DetailsPosts from "./src/components/DetailsPost";
import Publish from "./src/components/Publish";
import SplashScreen from "./src/screens/SplashScreen";
import Geolocation from "./src/screens/Geolocation";




class AppNavigation extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
}
const NavParameters = createStackNavigator(
    {
        Login: HomeScreen,
        Posts: PostsList,
        Details: DetailsPosts,
        Publish: Publish,
        Splash: SplashScreen,
        geoloc: Geolocation,
    },
    {
        initialRouteName: 'Splash',
        navigationOptions: {
            headerTitle: <Header/>,
            headerStyle: {
                backgroundColor: '#444444',
            }
        }
    });

export default NavParameters;