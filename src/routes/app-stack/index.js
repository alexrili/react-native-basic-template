import { createStackNavigator } from 'react-navigation-stack';
import { Easing, Animated } from 'react-native';

import Dashboard from 'pages/dashboard'


export default createStackNavigator(
    {
        Dashboard
    },
    {
        initialRouteName: 'Dashboard',

        headerMode: 'none',

        defaultNavigationOptions: {
            gesturesEnabled: false
        },

        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0]
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1]
                });

                return { opacity, transform: [{ translateY }] };
            }
        })
    }
);
