import React from "react";
import { Text, View, Button, StyleSheet, Image, ScrollView } from 'react-native';
import styles from "./styles";



export type currentSongProps = {
    songName:string,
    artistName:string,
    scheduleTime:string,
    discription:string,
    songImage:string,

}



const OnAirNow = (props:currentSongProps) => (
    <View style={styles.container}>
        
        <Text>
            On Air Now
        </Text>
        <View style={styles.containerLiveSong}>
            <Image style={styles.songImage} source={{uri:props.songImage}} />
            <View>
            <Text style={styles.songInfo}>
                {props.songName}
            </Text>
               <Text>
                {props.artistName}
            </Text>
            <Text>
                {props.scheduleTime}
            </Text>
              <Text>
                {props.discription}
            </Text>
            </View>
        </View>

    </View>
)

export default OnAirNow;