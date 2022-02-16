import { StyleSheet, Text, View  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import Album from '../components/Album';

const album = {
  id:'1',
  imageUri:'https://reactnative.dev/docs/assets/p_cat2.png',
  artistHeadline: 'what up doe'
}

export default function LiveRadioScreen({ navigation }: RootTabScreenProps<'LiveRadio'>) {
  return (
    <View style={styles.container}>
      <Album album={album} />
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
