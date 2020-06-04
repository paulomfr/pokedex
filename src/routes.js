/**
 * External dependencies.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Internal dependencies.
 */
import { SCREENS, getInitialScreen } from './screens';

const Stack = createStackNavigator();
const screenOptions = {};

const initialScreen = getInitialScreen();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={initialScreen.name}
      screenOptions={screenOptions}
    >
      {SCREENS.map((screen) => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
