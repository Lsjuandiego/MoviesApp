import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying } from '../interfaces/movieInterface'

export const HomeScreen = () => {

    useEffect(() => {
        movieDB.get<MovieDBNowPlaying>('/now_playing').then(
            resp => {
                console.log(resp.data.results[0].title);
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
