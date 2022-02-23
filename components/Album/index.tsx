import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native'
import styles from './styles';
import { Album } from '../../types';


export type albumProps = {
    album:Album,
}
const AlbumComponent = (props: albumProps) => (

    <TouchableWithoutFeedback>
    <View style={styles.container}>
        {/* image for the album */}
        {/* Artist Headline */}
        <Image style= {styles.image} source={{uri: props.album.imageUri}}/>
        <Text style={styles.text}>{props.album.artistHeadline}</Text>
    </View>
    </TouchableWithoutFeedback>
)

export default AlbumComponent;