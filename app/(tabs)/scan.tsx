import TitleCustome from '@/components/TitleCustome';
import icons from '@/constant/icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';

const Scan = () => {
  const [active, setActive] = useState('button1');
  const [scan, setScan] = useState(false);

  return (
    <View style={styles.container}>
      <TitleCustome title="SCAN RAPIDE" />
      <View style={styles.containerbis}>
        <Image source={icons.qrCode} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              setActive('button1');
            }}
            style={[styles.touche, styles.toucheLeft, active === 'button1' && styles.activeContainter]}
          >
            <Text style={[styles.text, active === 'button1' && styles.activeText]}>SORTIR DE STOCK </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive('button2');
            }}
            style={[styles.touche, styles.toucheRight, active === 'button2' && styles.activeContainter]}
          >
            <Text style={[styles.text, active === 'button2' && styles.activeText]}>ENTRÉE DE STOCK </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'stretch', alignItems: 'center' }}>
          <View style={[styles.scan, { flex: 3 / 5 }]}>
            <Image source={icons.loupe} />
            <TextInput placeholder="SCAN MANUEL" />
          </View>
          <TouchableOpacity onPress={() => router.push('/scanner/Camera')} style={[styles.scan, { flex: 2 / 5 }]}>
            <Image source={icons.darkScan} />
            <Text>SCANNEZ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  scan: {
    flexDirection: 'row',
    borderWidth: 3,
    padding: 10,
    alignItems: 'center',
    height: 50,
    borderRadius: 15,
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 50,
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  containerbis: {
    flex: 1,
    alignItems: 'center',
    gap: 25,
  },
  touche: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  toucheLeft: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  toucheRight: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    fontWeight: '600',
  },
  activeContainter: {
    backgroundColor: '#333B3F',
  },
  activeText: {
    color: 'white',
  },
});
