import React from "react";
import { View, Text, Image, FlatList, ScrollView, SectionList} from "react-native";
import { UpComingSongs } from '../../types';
import styles from "./styles";
import OnAirNow from "../OnAirNow";

export type upNextPlaylistProp = {
title:string,
songs:[UpComingSongs],
}


const UpComingSongList = (props:upNextPlaylistProp) => (
<View style={styles.container}>
{/* category title */}
<View>    
<Text>
{props.title}
</Text>
</View>
{/* Upcoming songs list */}

<FlatList 
data={props.songs}
renderItem={({item}) => (
    <View>
        <Image style={styles.songImage} source={{uri:item.imageUri}}/>
        <View>
            <Text> {item.songName}</Text>
            <Text> {item.artistName}</Text>
            <Text> {item.startTime}</Text>
            <Text> {item.songDiscription}</Text>
        </View>
        <View style={styles.separator} />
    </View>
)}
keyExtractor= {( item ) => item.id}
/>
</View>
)

export default UpComingSongList;