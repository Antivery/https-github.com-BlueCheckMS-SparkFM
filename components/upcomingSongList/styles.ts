import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {  
        justifyContent: 'center',
         flex:-1,
         height:'100%'
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

})


export default styles;