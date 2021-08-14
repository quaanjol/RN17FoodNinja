import * as React from 'react';

import {
    BottomTabBarOptions,
    BottomTabBarProps,
    createBottomTabNavigator,
  } from '@react-navigation/bottom-tabs';  

import {Dimensions, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import * as IconlyPack from 'react-native-iconly';

import Colors from '../../config/colors';

import Home from '../screens/Home';
import Onboarding1 from '../onboarding/Onboarding1';
import Onboarding2 from '../onboarding/Onboarding2';
import Onboarding3 from '../onboarding/Onboarding3';

const widthScreen = Dimensions.get('window').width;

export type TMainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Chat: undefined;
};

const Tab = createBottomTabNavigator<TMainTabParamList>();

const MainTab = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.primary5,
            }}
        >
            {/* home tab */}
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ({color}) => <IconlyPack.Home set="bold" color={color} />,
                }}
            />

            {/* profile tab */}
            <Tab.Screen
                name="Profile"
                component={Onboarding1}
                options={{
                tabBarIcon: ({color}) => <IconlyPack.User set="bold" color={color} />,
                }}
            />

            {/* cart tab */}
            <Tab.Screen
                name="Cart"
                component={Onboarding2}
                options={{
                tabBarIcon: ({color}) => <IconlyPack.Buy set="bold" color={color} />,
                }}
            />

            {/* chat tab */}
            <Tab.Screen
                name="Chat"
                component={Onboarding3}
                options={{
                tabBarIcon: ({color}) => <IconlyPack.Chat set="bold" color={color} />,
                }}
            />

        </Tab.Navigator>
    )
}

type TRouteName = keyof TMainTabParamList;

const MyTab = ({
    state,
    activeTintColor = Colors.primary,
    inactiveTintColor = Colors.primary5,
    navigation,
  }: BottomTabBarProps<BottomTabBarOptions>) => {
    let routeNames = state.routeNames as TRouteName[];
    let currentIndex = state.index; //index tab dang focus
    const renderContent = (item: TRouteName, color: string) => {
      switch (item) {
        case 'Home':
          return <IconlyPack.Home set="bold" color={color} key={item} />;
        case 'Profile':
          return <IconlyPack.User set="bold" color={color} key={item} />;
        case 'Cart':
          return (
            <View>
              <IconlyPack.Buy set="bold" color={color} key={item} />
              <View style={styles.badge}>
                <Text style={styles.txtNumberCart}>7</Text>
              </View>
            </View>
          );
        case 'Chat':
          return (
            <View>
              <IconlyPack.Chat set="bold" color={color} key={item} />
              <View style={styles.badge} />
            </View>
          );
        default:
          return null;
      }
    };
    return (
      <View style={styles.containerTab}>
        {routeNames.map((item, index) => {
          let color =
            currentIndex === index ? activeTintColor : inactiveTintColor;
          return (
            <TouchableOpacity
              style={styles.btnTab}
              onPress={() => navigation.navigate(item)}>
              {renderContent(item, color)}
            </TouchableOpacity>
          );
        })}
      </View>
    );
};
  
export default MainTab;

const styles = StyleSheet.create({
  btnTab: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTab: {
    width: widthScreen - 32,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: getBottomSpace() ? getBottomSpace() + 10 : 16,
    left: 16,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 22,
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 7,
    minHeight: 14,
    minWidth: 14,
    alignItems: 'center',
    justifyContent: 'center',
    top: -3,
    right: -5,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  txtNumberCart: {
    fontSize: 9,
    lineHeight: 12,
    color: '#FFF',
  },
});
