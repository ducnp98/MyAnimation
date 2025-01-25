import React from 'react'
import { Text, View } from 'react-native'
import tailwindColors from '../../helpers/Colors'
import {Button} from "../index"

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Button title='Drag Bottom Sheet' color={tailwindColors.blue[200]} navigateRoute='DragBottomSheet' />
    </View>
  )
}

export default HomeScreen