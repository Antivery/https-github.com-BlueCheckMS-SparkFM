import React from 'react';
import {View, Image, Text} from 'react-native'
import styles from './styles';


export type albumProps = {
    album:{
         id: string;
    imageUri: string;
    artistHeadline:string;
    }
   
}
const Album = (props: albumProps) => (
    <View style={styles.container}>
        {/* image for the album */}
        {/* Artist Headline */}
        <Image style= {styles.image} source={{uri: props.album.imageUri}}/>
        <Text style={styles.text}>{props.album.artistHeadline}</Text>
    </View>
)

export default Album;