import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

export const HomeScreen = () => {

    const navigation= useNavigation();
  return (
    <View>
        <Text>
            Home screen
        </Text>
        <Button
        title='ir detalle'
        onPress={()=> navigation.navigate('DetailScreen' as never)}></Button>
    </View>
  )
}
