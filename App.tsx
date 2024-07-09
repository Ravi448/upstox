/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './Source/Screens/Splash/Splash';
import UserHoldings from './Source/Screens/Holdings';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme} from '@app/Themes/default';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={DefaultTheme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen name="UserHoldings" component={UserHoldings} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

export default App;
