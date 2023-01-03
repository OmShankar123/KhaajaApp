import React, { useEffect } from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {Colors, Images, Fonts} from '../contants';
import {Display} from '../utils';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(()=>{
      //alert("jdcfjhd")
props.navigation.navigate('Welcome');
     
    },3000);
  });



  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
      <Text style={styles.titleText}>Khaaja</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60)
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily:Fonts.POPPINS_EXTRA_BOLD
  },
});

export default SplashScreen;
