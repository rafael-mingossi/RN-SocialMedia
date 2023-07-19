import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

export type StackNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Drawer: undefined;
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();
const Drawer = createDrawerNavigator<StackNavigatorParams>();
const ProfileTabs = createMaterialTopTabNavigator<StackNavigatorParams>();

const navigationOptions: NativeStackNavigationOptions = {
  // headerStyle: {
  //   backgroundColor: 'blue',
  // },
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerBackTitle: '',
  headerShown: false,
  // headerTintColor: 'red',
  headerLargeTitle: false,
  headerTitleStyle: {
    fontSize: 20,
  },
};

const Tab1 = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Tab 1</Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View>
      <Text>Tab 2</Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View>
      <Text>Tab 3</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          elevation: 0,
          zIndex: 0,
        },
        tabBarPressColor: 'transparent',
      }}>
      <ProfileTabs.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Photos'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Videos'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'Saved'} isFocused={focused} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MenuDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'Profile'} component={Profile} />
    </Drawer.Navigator>
  );
};
const Navigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={navigationOptions} initialRouteName="Home">
      <Stack.Screen name="Drawer" component={MenuDrawer} />
      {/*<Stack.Screen*/}
      {/*  name="Home"*/}
      {/*  component={Home}*/}
      {/*  options={{title: '', headerShown: false}}*/}
      {/*/>*/}
      {/*<Stack.Screen*/}
      {/*  name="Profile"*/}
      {/*  component={Profile}*/}
      {/*  options={{title: 'Overview'}}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};

export default Navigator;
