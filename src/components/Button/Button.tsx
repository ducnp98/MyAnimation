import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import tailwindColors from '../../helpers/Colors'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../AppNavigation/RootParams";
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

interface IButton {
  color: string;
  title: string;
  navigateRoute: string;
}

type NavigationProps = StackNavigationProp<RootStackParamList>;


const Button = ({ color, title, navigateRoute }: IButton) => {
  const {navigate} = useNavigation<NavigationProps>();
  const onNavigation = () => {
    navigate(navigateRoute)
  }
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={onNavigation}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8
  },
  title: {
    fontWeight: '600',
    color: tailwindColors.gray[700]
  }
})

export default Button