import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import movieDB from '../api/movieDB'

export const HomeScreen = () => {

    useEffect(() => {
        movieDB.get('/now_playing').then(
            resp => {
                console.log(resp.data);
            }
        );
    }, []);


    return (
        <View>
            <Text>
                Home screen
            </Text>
        </View>
    )
}
