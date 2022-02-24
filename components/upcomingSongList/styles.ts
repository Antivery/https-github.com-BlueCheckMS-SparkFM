import { StyleSheet } from "react-native";
import upcomingSongList from ".";


const styles = StyleSheet.create({
    container: {  
        justifyContent: 'center',
         flex:-1,
         height:'100%',
         margin:10,
         
    },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        separator: {
          marginVertical: 30,
          height: 1,
          width: '80%',
          backgroundColor:'lightgray',
          alignSelf:'center'
        },
        songImage:{
            height:80,
            width:80,
            marginRight:20,
            borderRadius:10
        },
        upcomingSongListContainer: {
          flexDirection:'row'
        },
        songInfo:{
          flexDirection:'column'
        },
        upcomingSongListWrapper:{
          marginTop: 15,
        }

})


export default styles;