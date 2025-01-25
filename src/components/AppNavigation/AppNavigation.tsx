import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DragBottomSheet from "../DragBottomSheet";
import { RootStackParamList } from "./RootParams";
import HomeScreen from "../HomeScreen";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="DragBottomSheet" component={DragBottomSheet} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
