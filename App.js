import { createStackNavigator } from 'react-navigation';
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Header from "./src/components/header";
import PostsList from "./src/components/PostsList";
import DetailsPosts from "./src/components/DetailsPost";
import Publish from "./src/components/Publish";


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
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerTitle: <Header/>,
            headerStyle: {
                backgroundColor: '#444444',
            }
        }
    });

export default NavParameters;