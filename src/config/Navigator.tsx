import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type StackNavigatorParams = {
  Home: undefined;
  Profile: undefined;
  Drawer: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();
const Drawer = createDrawerNavigator<StackNavigatorParams>();

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={navigationOptions}
        initialRouteName="Home">
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
    </NavigationContainer>
  );
};

export default Navigator;
