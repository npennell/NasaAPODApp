import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./MainPage";
import PicturePage from "./PicturePage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainScreen" component={MainPage} />
        <Stack.Screen name="PhotoScreen" component={PicturePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
