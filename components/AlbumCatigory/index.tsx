import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import {Album} from '../../types';
import AlbumComponent from '../Album';

export type albumCatProps = {
    title:string,
    albums:[Album],
}


const AlbumCategory = (props:albumCatProps) => (
<View style={styles.container}>
    {/* category title */}
    <View style={styles.textWrap}>
        
 <Text>
    {props.title}
</Text>
<Text style={styles.seeAll}>
    See All
</Text>
    </View>

{/* Album list */}
<FlatList 
data={props.albums}
renderItem={({item}) => <AlbumComponent album={item}/>}
keyExtractor= {( item ) => item.id}
horizontal={true}
/>
</View>
)


export default AlbumCategory;