import { StyleSheet, Text, View  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import AlbumCategory from '../components/AlbumCatigory';

const albumCategory= {
  title:'New Music',
  albums:[
  {
      id:'1',
  imageUri:'https://reactnative.dev/docs/assets/p_cat2.png',
  artistHeadline: 'what up doe'
  },
  {
    id:'2',
imageUri:'https://cdn.cosmicjs.com/9196c550-90cf-11ec-adb7-7f151b56f4d3-efe-kurnaz-RnCPiXixooY-unsplash.jpg',
artistHeadline: 'Spark Fm'
},
{
  id:'3',
imageUri:'https://reactnative.dev/docs/assets/p_cat2.png',
artistHeadline: 'what up doe'
},
{
  id:'4',
imageUri:'https://reactnative.dev/docs/assets/p_cat2.png',
artistHeadline: 'what up doe'
},
{
  id:'5',
imageUri:'https://reactnative.dev/docs/assets/p_cat2.png',
artistHeadline: 'what up doe'
}

]

}


export default function MusicScreen() {
  return (
    <View style={styles.container}>
    <AlbumCategory 
    title={albumCategory.title} 
    albums={albumCategory.albums}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
