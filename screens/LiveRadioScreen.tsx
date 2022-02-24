import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import OnAirNow from '../components/OnAirNow';
import UpComingSongList from '../components/upcomingSongList';





const currentSong ={
  songName:'hey there',
  artistName:'tim james',
  scheduleTime:'1:00 - 2:00',
  discription:'test',
  songImageUri:'https://cdn.cosmicjs.com/9196c550-90cf-11ec-adb7-7f151b56f4d3-efe-kurnaz-RnCPiXixooY-unsplash.jpg'
}

const upcomingSong = {
  title:'Coming Up',
  songs:[
    {
      id:1,
      imageUri:'https://cdn.cosmicjs.com/9196c550-90cf-11ec-adb7-7f151b56f4d3-efe-kurnaz-RnCPiXixooY-unsplash.jpg',
      songName:'test',
    artistName: 'big guap',
    startTime: '2:00pm - 2:30pm',
    songDiscription: 'test'
    },
    {
      id:2,
      imageUri:'https://imgix.cosmicjs.com/9196c550-90cf-11ec-adb7-7f151b56f4d3-efe-kurnaz-RnCPiXixooY-unsplash.jpg',
      songName:'test',
    artistName: 'big guap',
    startTime: '2:00pm - 2:30pm',
    songDiscription: 'test'
    },
    {
      id:3,
      imageUri:'https://cdn.cosmicjs.com/9196c550-90cf-11ec-adb7-7f151b56f4d3-efe-kurnaz-RnCPiXixooY-unsplash.jpg',
      songName:'test',
    artistName: 'big guap',
    startTime: '2:00pm - 2:30pm',
    songDiscription: 'test'
    },
  ]
}

export default function LiveRadioScreen({ navigation }: RootTabScreenProps<'LiveRadio'>) {
  return (
    
    <View style={styles.container}>
     
      <View style={styles.sparkLiveContainer}>
        <View>
        <Text style={styles.sparkLive}>
          Spark Live
        </Text>
        <View style={styles.bar} />
        </View>
        <Text style={styles.schedule}>
          Schedule
        </Text>
      </View>
    
        <View style={styles.liveNowCntainer}>
          <Image style={styles.liveNow} source={require('../assets/images/pexels-cottonbro-6700056.jpg')}/>
        </View>
     <OnAirNow 
     songName={currentSong.songName}
     artistName={currentSong.artistName}
     scheduleTime={currentSong.scheduleTime}
     discription={currentSong.discription}
     songImage= {currentSong.songImageUri}
     />
      <View style={styles.separator} />
    <UpComingSongList title={upcomingSong.title} songs={upcomingSong.songs} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {  
  justifyContent: 'center',
    height:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor:'lightgray',
    alignSelf:'center'
    
  },
  sparkLiveContainer:{
    marginTop:15,
    marginLeft:15,
    flexDirection:'row'
  },
  sparkLive:{
   marginRight:20,
   fontWeight:'800',
   fontSize:23

  },
  schedule:{
    fontWeight:'800',
    fontSize:23,
    color: 'lightgray'
  },
  liveNowCntainer:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
  marginTop:20,
  marginLeft:5,
  marginRight:5
  },
  liveNow:{
  resizeMode:'center',
    height:200,
    width:'100%',
    borderRadius:10

  },
  bar: {
    marginVertical: 2,
    height: 3,
    width: '85%',
    backgroundColor:'orange',
    alignSelf:'flex-start'
  }
});
