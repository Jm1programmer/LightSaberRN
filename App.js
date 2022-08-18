import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Touch, TouchableOpacity } from 'react-native';

export default function LightSaber() {


    return (

      <View style={styles.container}>
        <Image source={ require('./assets/lightsaberImg/lightsaberon.png') }  style={styles.LightSaber} resizeMode='stretch'/>
        
      </View>
      
    );
    }







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightSaber: {
    width: 200,
    height: 600,
  },
});

function changeImage() {
  if(lightsaber = true) {
    lightsaber = false;
  } else {
    lightsaber = true;
  }
}