import { createStackNavigator } from 'react-navigation';
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Header from "./src/components/header";
import PostsList from "./src/components/PostsList";
import DetailsPosts from "./src/components/DetailsPost";
import Publish from "./src/components/Publish";
import Loader from "./src/components/Loader";



class AppNavigation extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
}
const NavParameters = createStackNavigator(
    {
        Home: HomeScreen,
        Posts: PostsList,
        Details: DetailsPosts,
        Publish: Publish,
        Loader: Loader
    },
    {
        initialRouteName: 'Loader',
        navigationOptions: {
            headerTitle: <Header/>,
            headerStyle: {
                backgroundColor: '#444444',
            }
        }
    });

export default NavParameters;