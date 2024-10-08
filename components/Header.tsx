import { StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import icons from '@/constant/icons';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#24353E', '#024965']} style={styles.background} />
      <Image source={icons.lightLogo} />
      <ImageBackground source={icons.profile} style={styles.image}>
        <Link href={{ pathname: '/user/[id]', params: { id: 3 } }} style={styles.link} />
      </ImageBackground>

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 35,
    width: 30,
  },
  link: {
    height: 35,
    width: 30,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
