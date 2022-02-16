import React from 'react';
import {View, Image, Text} from 'react-native'



export type albumProps = {
    id: string;
    imageUri: string;
    artistHeadline:string;
}
const Album = (props: albumProps) => (
    <View>
        {/* image for the album */}
        {/* Artist Headline */}

        <Image source={{uri: props.imageUri}}/>


    </View>
)

export default Album;